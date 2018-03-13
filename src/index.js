import React, { Component } from 'react';
import {
  View,
  Platform,
  Keyboard,
  StyleSheet,
  LayoutAnimation
} from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const SAFE_AREA_BOTTOM_HEIGHT = 34;

export default class KeyboardAccessory extends Component {
  static defaultProps = {
    backgroundColor: '#f6f6f6'
  }

  constructor(props) {
    super(props);
    this.state = {
      bottom: 0
    };
  }

  componentDidMount() {
    let keyboardShowEvent = 'keyboardWillShow';
    let keyboardHideEvent = 'keyboardWillHide';

    if (Platform.OS === 'android') {
      keyboardShowEvent = 'keyboardDidShow';
      keyboardHideEvent = 'keyboardDidHide';
    }

    this.keyboardShowListener = Keyboard.addListener(keyboardShowEvent, (e) => this.keyboardShow(e));
    this.keyboardHideListener = Keyboard.addListener(keyboardHideEvent, (e) => this.keyboardHide(e));
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow(e) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      bottom: isIphoneX() ? (e.endCoordinates.height - SAFE_AREA_BOTTOM_HEIGHT) : e.endCoordinates.height
    });
  }

  keyboardHide(e) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      bottom: 0
    });
  }

  render() {
    let { bottom } = this.state;
    let { children, backgroundColor } = this.props;

    if (!children) {
      throw new Error('`children` Missing. You should wrap at least one component into <KeyboardAccessory />.');
    }

    return (
      <View style={[styles.container, { backgroundColor, bottom }]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  }
});
