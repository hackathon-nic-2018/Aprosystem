import React, { Component, Fragment } from 'react';
import Lineasmenu from './../components/lineasmenu';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import {
    ToastAndroid,
} from 'react-native';

import {
    filterDataLine,
} from './../state/actions/linesAction';

class LineasmenuContainer extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('lineasmenubuses');
        this.unsubscribe = null;
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }

    addLineasmenu = (name, description) => {
        this.ref.add({
            name: name,
            description: description,
        });
    };

    onCollectionUpdate = (querySnapshot) => {
        const data = [];

        data.push({
            key: '',
            name: 'Todos',
            description: 'Mostrar todos los valores',
        });
        
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
            <Lineasmenu
                data={data}
                onItemPress={this.handleItemPress}
            />
        );

    }

    handleItemPress = (id) => {
        this.props.filterDataLine(id);
    };

}

const mapDispatchToProps = (dispatch) => ({

    filterDataLine: (id) => dispatch(filterDataLine(id)),

});

export default connect(null, mapDispatchToProps)(LineasmenuContainer);