import React from 'react';
import {
  View,
  Alert,
  TextInput,
  Keyboard,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardAccessory from 'react-native-sticky-keyboard-accessory';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Click me!' />
        <KeyboardAccessory>
          <View style={styles.keyboardAccessoryContainer}>
            <Icon
              style={styles.keyboardAccessoryItem}
              name='smile-o'
              size={30} />
            <Icon
              style={styles.keyboardAccessoryItem}
              name='angle-down'
              size={30}
              onPress={() => Keyboard.dismiss()} />
          </View>
        </KeyboardAccessory>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  keyboardAccessoryContainer: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  keyboardAccessoryItem: {
    color: '#979797',
    width: 40
  },
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey'
  },
});
