import React, { Component } from 'react';
import { View, SafeAreaView, Image } from 'react-native';
import ImagesPath from '../../../Constants/ImagesPath';
import ButtonComp from '../../../Components/ButtonComp';
import NavigationStrings from '../../../Navigations/NavigationStrings';
import styles from './Styles';
const SplashScreen = ({ navigation }) => {
	const moveToScreen = screen => {
		navigation.navigate(screen);
	};
	return (
		<View style={styles.container}>
			<Image style={styles.ImgStyle} source={ImagesPath.SplashImage} />
			<SafeAreaView style={{ flex: 1, justifyContent: 'flex-end' }}>
				<View style={styles.buttonsBox}>
					<ButtonComp
						btnTxt={'SignUp'}
						onPress={() => moveToScreen(NavigationStrings.SIGNUP_SCREEN)}
					/>
					<View style={{ paddingHorizontal: 20 }} />
					<ButtonComp
						btnTxt={'Login'}
						btnStyl={styles.btnStyl}
						TxtStyle={styles.TxtStyle}
						onPress={() => moveToScreen(NavigationStrings.LOGIN_SCREEN)}
					/>
				</View>
			</SafeAreaView>
		</View>
	);
};
export default SplashScreen;
