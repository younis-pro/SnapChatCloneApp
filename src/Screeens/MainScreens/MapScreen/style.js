import Colors from '../../../Constants/Colors';
import {  StyleSheet} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    headerViewStyle:{
        position: 'relative',
       
        left: moderateScale(15),
        marginRight:moderateScale(10)
    },
    btomheader: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,


    },
    iconStyle: {
        backgroundColor: Colors.White_Color,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    headerStyle:{
    
    }
    
});
export default styles;