import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Colors from '../Constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const TextInputComp = ({
	label,
	labelStyle = {},
	inputStyle = {},
	placeholder,
	onChangeText,
	value,
	textStyle = {},
	secureText,
	onPressSecure,
	...props
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.labelStyle}>
				{label}
			</Text>
			<View style={{ ...styles.inputStyle, ...inputStyle }}>
				<TextInput
					placeholder={placeholder}
					onChangeText={onChangeText}
					style={{ ...styles.textStyle, ...textStyle }}
					value={value}
					{...props}
				/>
				{!!onPressSecure && <TouchableOpacity onPress={onPressSecure}>
					<Ionicons name={secureText ? 'eye-off' : 'eye'} size={24} />

				</TouchableOpacity>}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: { marginTop: 20, marginVertical: 20 },
	inputStyle: {
		borderBottomWidth: scale(1),
		padding: scale(10),
		borderColor: Colors.Black_Color,
		fontSize: 16,
		justifyContent: 'space-between',
		flexDirection: 'row',


	},
	labelStyle: {
		fontSize: scale(14),
		textTransform: 'uppercase',
		paddingLeft: moderateScale(20),

	},
	textStyle: {
		fontSize: 16,
		flex: 1,

	}
});
export default TextInputComp;
