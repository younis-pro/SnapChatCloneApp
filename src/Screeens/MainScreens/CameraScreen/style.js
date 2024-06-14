import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
   textStyle:{ 
    fontSize: moderateScale(18),
     color: "blue" },
    preview: {
      alignSelf: 'stretch',
     flex:1,

    }
  });

  export default styles