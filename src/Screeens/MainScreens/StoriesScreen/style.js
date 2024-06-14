import {StyleSheet,} from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import Colors from '../../../Constants/Colors';
const styles = StyleSheet.create({
    flatStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendsHeadr:{
        fontSize:scale(18),
        marginVertical:moderateVerticalScale(10),
        marginLeft:moderateScale(10),
        fontWeight:'bold'
    },
    quickStyle:{
         
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:moderateScale(8),
        shadowColor:"rgb(0,0,0.2)",
        shadowOffset: {width:0 ,height: 1,},
        shadowOpacity:0.4,
        margin:2,
        padding:moderateScale(8)     
    },
    addbtn:{
        backgroundColor:Colors.GREY_OPCITY,
        borderRadius:moderateScale(5),
        marginLeft:20,
        width: moderateScale(45),
        alignItems:'center',   
    },
    subscriptionView:{
        width: moderateScale(110),
        height: moderateScale(200),
        justifyContent: 'flex-end',
        padding:moderateScale(8)
    },
    discoverView:{
        // width: moderateScale(180),
        height: moderateScale(200),
        justifyContent: 'flex-end',
        padding:moderateScale(8),
        flex:1,
        marginHorizontal:moderateScale(8),
    }
});
export default styles;