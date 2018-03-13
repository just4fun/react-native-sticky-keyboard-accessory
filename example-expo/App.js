import React from 'react';
import {
  View,
  Alert,
  Keyboard,
  TextInput,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import KeyboardAccessory from 'react-native-sticky-keyboard-accessory';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <KeyboardAccessory>
            <View style={styles.keyboardAccessoryContainer}>
              <TextInput
                style={styles.input}
                placeholder='Click me!' />
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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4fa7ff'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  keyboardAccessoryContainer: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  keyboardAccessoryItem: {
    color: '#979797',
    marginLeft: 10
  },
  input: {
    flex: 1,
    height: 30,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
});
