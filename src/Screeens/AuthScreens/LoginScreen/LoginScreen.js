import React, { Component, useEffect, useState, version } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';
import TextInputComp from '../../../Components/TextInputComp';
import Header from '../../../Components/Header';
import WrapperComp from '../../../Components/WrapperComp';
import Eng from '../../../Constants/Lang/Eng';
import ButtonComp from '../../../Components/ButtonComp';
import Colors from '../../../Constants/Colors';
import actions from '../../../redux/actions';
const LoginScreen = () => {
    const [state, setState] = useState({
        isloading: false,
        password: '',
        email: '',
        secureText: true,
        isEnable: false
    });
    const { isloading, password, email, secureText, isEnable } = state;
    const updateState = (data) => setState((state) => ({ ...state, ...data }))
    useEffect(() => {
        if (email !== '' && password !== '') {
            updateState({ isEnable: true })
            return;
        }
        updateState({ isEnable: false })
    }, [email, password])
    const onLogin = () => {
        actions.login(true)
        alert('Login Success...')
    }
    return (

        <WrapperComp >
            <View style={{ flex: 1, justifyContent: 'space-between', }}>
                <View >
                    <Header />
                    <Text style={styles.headingText}> {Eng.LOGIN}</Text>

                    <TextInputComp

                        label={Eng.USERNAME_OR_EMAIL}
                        placeholder={Eng.Please_Enter_Your_Email}
                        value={email}
                        onChangeText={(email) => updateState({ email })}
                    />

                    <TextInputComp
                        label={Eng.PASSWORD}
                        placeholder={Eng.Please_Enter_Your_Password}
                        value={password}
                        onChangeText={(password) => updateState({ password })}
                        secureTextEntry={secureText}
                        secureText={secureText}
                        onPressSecure={() => updateState({ secureText: !secureText })}
                    />
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text style={styles.textStyle}>{Eng.FORGOT_YOUR_PASSWORD}</Text>
                    </TouchableOpacity>
                </View>
                <ButtonComp
                    isDiable={!isEnable}
                    btnTxt={Eng.LOGIN}
                    btnStyl={{ ...styles.btnStyl, backgroundColor: isEnable ? Colors.Blue_Color : Colors.GREY_COLOR }}
                    onPress={onLogin}
                />
            </View>
        </WrapperComp>
    );
};
export default LoginScreen;
