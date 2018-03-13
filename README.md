# react-native-sticky-keyboard-accessory

[![npm downloads](https://img.shields.io/npm/dm/react-native-sticky-keyboard-accessory.svg)](https://www.npmjs.com/package/react-native-sticky-keyboard-accessory)
[![version](https://img.shields.io/npm/v/react-native-sticky-keyboard-accessory.svg)](https://www.npmjs.com/package/react-native-sticky-keyboard-accessory)
[![GitHub issues](https://img.shields.io/github/issues/just4fun/react-native-sticky-keyboard-accessory.svg)](https://github.com/just4fun/react-native-sticky-keyboard-accessory/issues)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

## Preview

![iphone7](https://user-images.githubusercontent.com/7512625/37331257-6ee9b030-26de-11e8-8311-d7dc121d7d35.gif)
![nexus5](https://user-images.githubusercontent.com/7512625/37331060-d20bf8b8-26dd-11e8-9770-385b33a109f6.gif)

## Installation

```bash
npm install --save react-native-sticky-keyboard-accessory
```

or

```bash
yarn add react-native-sticky-keyboard-accessory
```

## Usage

```javascript
import KeyboardAccessory from 'react-native-sticky-keyboard-accessory';

<KeyboardAccessory>
  <View style={{ flexDirection: 'row', height: 40 }}>
    <TextInput
      style={{ flex: 1, height: 30, borderWidth: 1 }}
      placeholder='Click me!' />
    <Icon
      style={{ marginLeft: 10 }}
      name='smile-o'
      size={30} />
    <Icon
      style={{ marginLeft: 10 }}
      name='angle-down'
      size={30}
      onPress={() => Keyboard.dismiss()} />
  </View>
</KeyboardAccessory>
```

## How it works

- Update `bottom` to the height of keyboard when keyboard show
- Reset `bottom` to `0` once keyboard hide

#### iPhoneX

As you see, there is such line in source code.

```javascript
this.setState({
  bottom: isIphoneX() ? (e.endCoordinates.height - 34) : e.endCoordinates.height
});
```

To be honest, if you just wrap `<KeyboardAccessory>` into `<SafeAreaView>`, it doesn't work.

```javascript
<SafeAreaView style={{ flex: 1 }}>
  <KeyboardAccessory>
    ...
  </KeyboardAccessory>
</SafeAreaView>
```

In this way, your `<KeyboardAccessory>` will occupy bottom safe area actually.

You should wrap with one more `<View>` for `<KeyboardAccessory>`.

```javascript
<SafeAreaView style={{ flex: 1 }}>
  <View style={{ flex: 1 }}>
    <KeyboardAccessory>
      ...
    </KeyboardAccessory>
  </View>
</SafeAreaView>
```

![iphonex](https://user-images.githubusercontent.com/7512625/37330533-5db80480-26dc-11e8-8c7f-1f81b540962b.gif)

You can try it out with [example](example-expo) project.

## Props

- `backgroundColor` _(string)_ - Color of keyboard accessory's background, defaults to `#f6f6f6`.

## License

[The MIT License](http://opensource.org/licenses/MIT)
