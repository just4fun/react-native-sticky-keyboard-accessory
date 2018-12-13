# react-native-sticky-keyboard-accessory

[![npm downloads](https://img.shields.io/npm/dm/react-native-sticky-keyboard-accessory.svg)](https://www.npmjs.com/package/react-native-sticky-keyboard-accessory)
[![version](https://img.shields.io/npm/v/react-native-sticky-keyboard-accessory.svg)](https://www.npmjs.com/package/react-native-sticky-keyboard-accessory)
[![GitHub issues](https://img.shields.io/github/issues/just4fun/react-native-sticky-keyboard-accessory.svg)](https://github.com/just4fun/react-native-sticky-keyboard-accessory/issues)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)

## Motivation

This library was initially built for my following projects.

- [just4fun/react-native-smart-emoji-picker](https://github.com/just4fun/react-native-smart-emoji-picker)
- [just4fun/stuhome](https://github.com/just4fun/stuhome)

## Preview

![iphone7](https://user-images.githubusercontent.com/7512625/49340995-362e8580-f682-11e8-8e59-3d496e9bc049.gif)
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

```javascript
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

componentDidMount() {
  this.keyboardShowListener = Keyboard.addListener(keyboardShowEvent, (e) => this.keyboardShow(e));
  this.keyboardHideListener = Keyboard.addListener(keyboardHideEvent, (e) => this.keyboardHide(e));
}

keyboardShow(e) {
  this.setState({
    bottom: isIphoneX() ? (e.endCoordinates.height - getBottomSpace()) : e.endCoordinates.height
  });
}

keyboardHide(e) {
  this.setState({
    bottom: 0
  });
}
```

#### iPhone X (iPhone XR, iPhone XS, iPhone XS Max)

For new iPhones, if you just wrap `<KeyboardAccessory>` into `<SafeAreaView>`, the UI doesn't look good.

```javascript
<SafeAreaView style={{ flex: 1 }}>
  <KeyboardAccessory>
    ...
  </KeyboardAccessory>
</SafeAreaView>
```

In this way, your `<KeyboardAccessory>` will actually occupy bottom safe area.

You should wrap one more `<View>` for `<KeyboardAccessory>`.

```javascript
<SafeAreaView style={{ flex: 1 }}>
  <View style={{ flex: 1 }}>
    <KeyboardAccessory>
      ...
    </KeyboardAccessory>
  </View>
</SafeAreaView>
```

![iphonex](https://user-images.githubusercontent.com/7512625/49341074-5e6ab400-f683-11e8-8737-544bf31ee332.gif)

You can try it out with [example](example-expo) project.

## Props

- `backgroundColor` _(string)_ - Color of keyboard accessory's background, defaults to `#f6f6f6`.
- `verticalOffset` _(number)_ - Adds a vertical offset, default is 0.

## License

[The MIT License](http://opensource.org/licenses/MIT)
