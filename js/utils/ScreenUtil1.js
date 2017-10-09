/**
 * Created by yaoyongchao on 17-9-29.
 * Description:
 */

/**
 * Created by zhuoy on 2017/6/27.
 * 屏幕工具类
 * ui设计基准,iphone 6
 * width:750
 * height:1334
 */

/*
 设备的像素密度，例如：
 PixelRatio.get() === 1          mdpi Android 设备 (160 dpi)
 PixelRatio.get() === 1.5        hdpi Android 设备 (240 dpi)
 PixelRatio.get() === 2          iPhone 4, 4S,iPhone 5, 5c, 5s,iPhone 6,xhdpi Android 设备 (320 dpi)
 PixelRatio.get() === 3          iPhone 6 plus , xxhdpi Android 设备 (480 dpi)
 PixelRatio.get() === 3.5        Nexus 6       */

import {
    Dimensions,
    PixelRatio,
} from 'react-native';


export const deviceWidth = Dimensions.get('window').width;      //设备的宽度 单位为pt
export const deviceHeight = Dimensions.get('window').height;    //设备的高度
let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例

let pixelRatio = PixelRatio.get();      //当前设备的像素密度
//设计图宽高
const w2 = 1080;
const h2 = 1920;
// const scale = Math.min(deviceHeight * pixelRatio / h2, deviceWidth * pixelRatio / w2);   //获取缩放比例
const scale =  deviceWidth * pixelRatio / w2;   //获取缩放比例
/**
 * 设置text为sp
 * @param size sp
 * return number dp
 */
export function setSpText(size: number) {
    size = Math.round((size * scale  / pixelRatio ) * pixelRatio / fontScale);
    console.log("size------:" + size);
    return size;
}

export function scaleSize(layoutSize) {
    const aa = Math.round(layoutSize * scale / pixelRatio );
    return Math.round(layoutSize * scale / pixelRatio );
}
