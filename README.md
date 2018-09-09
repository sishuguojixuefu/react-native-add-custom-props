# react-native-add-custom-props

> add custom props tp react native component

## Install

```bash
$ yarn add react-native-add-custom-props
```

## Usage

```js
import addCustomProps from 'react-native-add-custom-props'
// 处理ios系统文字，可以判断一下平台
addCustomProps(Text, {allowFontScaling: false})
addCustomProps(TextInput, {allowFontScaling: false})
```
