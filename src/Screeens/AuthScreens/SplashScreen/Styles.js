import { StyleSheet } from 'react-native';
import Colors from '../../../Constants/Colors';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.Yellow_Color,
		alignItems: 'center'
	},
	ImgStyle: {
		width: scale(120),
		height: scale(120),
		marginTop: verticalScale(200)
	},
	buttonsBox: {
		flexDirection: 'row',
		marginBottom: scale(20)
	},
	btnStyl: {
		backgroundColor: Colors.White_Color
	},
	TxtStyle: {
		color: Colors.Black_Color
	}
});
export default styles;
