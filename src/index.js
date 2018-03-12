import React, { Component } from 'react';
import {
  View,
  Keyboard,
  StyleSheet,
  LayoutAnimation
} from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const SAFE_AREA_BOTTOM_HEIGHT = 34;

export default class KeyboardAccessory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bottom: 0
    };
  }

  componentDidMount() {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', (e) => this.keyboardWillShow(e));
    this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', (e) => this.keyboardWillHide(e));
  }

  componentWillUnmount() {
    this.keyboardWillShowListener.remove();
    this.keyboardWillHideListener.remove();
  }

  keyboardWillShow(e) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      bottom: isIphoneX() ? (e.endCoordinates.height - SAFE_AREA_BOTTOM_HEIGHT) : e.endCoordinates.height
    });
  }

  keyboardWillHide(e) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      bottom: 0
    });
  }

  render() {
    let { bottom } = this.state;

    return (
      <View style={[styles.container, { bottom }]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  }
});
