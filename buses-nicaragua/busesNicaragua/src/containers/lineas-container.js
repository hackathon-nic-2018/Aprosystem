import React, { Component } from 'react';
import Lineas from './../components/lineas';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import {
    dataLine,
    filterDataLine,
} from './../state/actions/linesAction'


class LineasContainer extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('lineasDeBuses');
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
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    addLinea = (name, description) => {
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
        this.props.dataLine(data);
    }

    render() {

        const { data } = this.props;

        return(
            <Lineas
                data={data}
                navigate={this.props.navigate}
            />
        );

    }

}

const mapStateToProps = (newState, props) => {

    let { lines } = newState;

    return {
        data: lines.data,
        ciudadId: lines.id,
    };
};

const mapDispatchToProps = (dispatch) => ({
    dataLine: (data) => dispatch(dataLine(data)),
    filterDataLine: (id) => dispatch(filterDataLine(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LineasContainer);