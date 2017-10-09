/**
 * Created by yaoyongchao on 17-9-28.
 * 外部样式文件
 */

import {
    Dimensions,
    PixelRatio,
} from 'react-native';
import colors from '../utils/Colors'
import * as ScreenUtil1 from "../utils/ScreenUtil1";
const pt2px = pt=>PixelRatio.getPixelSizeForLayoutSize(pt);
const px2pt = px=>PixelRatio.roundToNearestPixel(px);
const styles = {
    viewContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'green',
    },
    imgAppSplash: {
        width: ScreenUtil1.scaleSize(1080),
        height: ScreenUtil1.scaleSize(360),
        // width: 360,
        // height: 100,
        // width: 324,
        // height: 90,
        // width: 318,
        // height: 89,
        // width: pt2px(1080),
        // height: pt2px(360),
        resizeMode: 'cover'
        // backgroundColor: 'red',
    },
    btn: {
        fontSize: 30,
        backgroundColor: 'red',
    }
}

module.exports = styles;
