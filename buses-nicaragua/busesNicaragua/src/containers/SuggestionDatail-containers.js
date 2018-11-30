import React, { Component, Fragment } from 'react';
import SuggestionDatail from '../components/SuggestionDatailScreen';
//import LineasMenu from './../components/lineasmenu';
import firebase from 'react-native-firebase';


class SuggestionDatailscontainer extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('SuggestionDatail');
        this.unsubscribe = null;
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        if(this.props.ciudadId) {
            this.unsubscribe = this.ref.where("ciudadId", "==", this.props.ciudadId).onSnapshot(this.onCollectionUpdate)
        }
        else {
            this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.ciudadId !== prevProps.ciudadId) {
            if(this.props.ciudadId) {
                this.unsubscribe = this.ref.where("ciudadId", "==", this.props.ciudadId).onSnapshot(this.onCollectionUpdate)
            }
            else {
                this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
            }
        }
    }
    
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    addsuggestionDatail = (name, description) => {
        this.ref.add({
            name: name,
            description: description,
        });
    };

    onCollectionUpdate = (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            const { name, description } = doc.data();
            data.push({
                key: doc.id,
                name,
                description,
            });
        });
        this.setState({ 
            data,
        });
    }

    render() {
        const { data } = this.state;

        return(
            <SuggestionDatail
                data={data}
            />
        );

    }

}

export default SuggestionDatailscontainer;