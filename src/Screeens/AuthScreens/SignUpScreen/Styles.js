import {StyleSheet} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from '../../../Constants/Colors';
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    textStyle: {
        fontSize: scale(14),
        alignSelf: 'center',
        color: Colors.Blue_Color,
        marginVertical: verticalScale(20)

    },
    btnStyl: {
        backgroundColor: Colors.GREY_COLOR,
        alignSelf: 'center',
        width: scale(200),
        marginBottom: verticalScale(10)
    },
    headingText: {
        fontSize: scale(20),
        alignSelf: 'center',
        marginBottom: verticalScale(34)
    }
});
export default styles;