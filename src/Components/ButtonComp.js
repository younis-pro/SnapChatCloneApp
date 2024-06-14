
import React, { Component } from 'react';
import Colors from '../Constants/Colors';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// for Resposive Library
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ButtonComp = ({
	btnStyl = {},
	btnTxt,
	TxtStyle = {},
	onPress = () => { },
	isDiable = false
}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={{ ...styles.btnStyl, ...btnStyl }}
				activeOpacity={0.8}
				onPress={onPress}
				disabled={isDiable}
			>
				<Text style={{ ...styles.TxtStyle, ...TxtStyle }}>
					{btnTxt}
				</Text>
			</TouchableOpacity>
		</View>
	);
};
const styles = StyleSheet.create({
	btnStyl: {
		backgroundColor: Colors.Blue_Color,
		width: scale(120),
		height: scale(40),
		borderRadius: scale(50),
		justifyContent: 'center'
	},
	TxtStyle: {
		textAlign: 'center',
		color: Colors.White_Color
	}
});

export default ButtonComp;
