import { StyleSheet, } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../Constants/Colors';
const styles = StyleSheet.create({
    flatStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameStyle: {
        fontSize: scale(16),
        fontWeight: "bold"
    },
    snapStyle: {
        color: Colors.RED_COLOR,
        fontSize: scale(10),
        fontWeight: 'bold',
    },
    timeStyle: {
        marginLeft: moderateScale(6),
        opacity: scale(0.5),
    },
    streakStyle: {
        fontSize: scale(10),
        fontWeight: 'bold'
    },
    lineStyle: {
        borderBottomWidth: scale(0.3),
        opacity: 0.2,
        marginVertical: verticalScale(14)
    },
    verticalLine: {
        borderRightWidth: scale(1),
        borderColor: Colors.Black_Color,
        height: verticalScale(24),
        marginHorizontal: moderateScale(8),
        opacity: scale(0.2),
    }
});
export default styles;