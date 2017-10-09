/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    PixelRatio,
    Button,
    Alert,
    Text,
    Dimensions,
    StatusBar
} from 'react-native';
import styles from './js/common/ComStyles'
import MyScreen from "./js/utils/MyScreen";
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
export default class App extends Component {
    render() {
        return (
            <View style={styles.viewContainer}>
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}  //是否隐藏状态栏。
                    backgroundColor={'green'} //状态栏的背景色
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')
                >
                </StatusBar>

                <Button title="OnClick" onPress={() => Alert.alert(px2pt(6) + "xiangsu")} />
                <Button title="OnClick" onPress={() => Alert.alert(MyScreen.width + "----"
                    + PixelRatio.getFontScale()) } />
                <Text style={styles.btn}>国庆节快乐</Text>
                <Image style={styles.imgAppSplash}
                    source={require('./js/image/aa.png')}></Image>
            </View>
        );
    }
}


