import React, { Component } from "react";
import { Provider } from "react-redux";

import "~/config/ReactotronConfig";
import store from "~/store";

import { View } from "react-native";

// import styles from './styles';

export default class src extends Component {
    render() {
        return (
            <Provider store={store}>
                <View />
            </Provider>
        );
    }
}
