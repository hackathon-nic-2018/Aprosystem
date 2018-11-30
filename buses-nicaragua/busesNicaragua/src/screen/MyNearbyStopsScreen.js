import React, { Component } from 'react';
import {
    View,
    Text
}
from 'react-native';
import NearByStops from './../components/near-by-stops';

class MyNearbyStopsScreen extends Component {
    
    render() {
        return (
            <NearByStops />
        );
    }    
}

export default MyNearbyStopsScreen;