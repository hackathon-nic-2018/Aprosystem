import React, {Component} from 'react';
import {
    View,
    StatusBar,
}
from 'react-native';
import Lineas from '../containers/lineas-container';
import Lines2Screen from '../containers/lineasmenu-container';


class LinesScreen extends Component {

    navigate = (view) => {
        this.props.navigation.navigate(view);
    }
    
    render() {

        return (
            <View>
                <StatusBar
                    backgroundColor="#1a237e"
                    barStyle="light-content"
                />
                <View>
                    <Lines2Screen/>
                </View>

                <View>
                    <Lineas
                        navigate={this.navigate}
                    />
                </View>
            </View>
           
        );

    }

}

export default LinesScreen;