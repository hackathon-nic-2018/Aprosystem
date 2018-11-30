import React, { Component, Fragment } from 'react';
import Lineasdatail from '../components/lineasdatail';
//import LineasMenu from './../components/lineasmenu';
import firebase from 'react-native-firebase';


class lineasdatailcontainer extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('Lineasdetail');
        this.unsubscribe = null;
        this.state = {
            data: [],
        };
    }

    
    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate) 
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    addsuggestion = (name, description) => {
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
            <Lineasdatail
                data={data}
            />
        );

    }

}

export default lineasdatailcontainer;