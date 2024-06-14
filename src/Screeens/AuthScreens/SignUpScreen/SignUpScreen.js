import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import TextInputComp from '../../../Components/TextInputComp';
import Header from '../../../Components/Header';
import WrapperComp from '../../../Components/WrapperComp';
import Eng from '../../../Constants/Lang/Eng';
import styles from './Styles';
import ButtonComp from '../../../Components/ButtonComp';
const SignUpScreen = () => {
    const [state, setState] = useState({
        isloading: false,
        firstname: '',
        lastname: '',
        password: '',
        email: '',
        secureText: true,
    });
    const { isloading, password, firstname, lastname, email, secureText } = state;
    const updateState = (data) => setState((state) => ({ ...state, ...data }))
    return (

        <WrapperComp >
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <Header />
                    <Text style={styles.headingText}> {Eng.CREATE_ACCOUT}</Text>
                    <TextInputComp
                        label={Eng.FIRST_Name}
                        placeholder={Eng.ENTER_YOUR_FIRST_NAME}
                        value={firstname}
                        onChangeText={(firstname) => updateState({ firstname })}
                    />
                    <TextInputComp
                        label={Eng.LAST_Name}
                        placeholder={Eng.ENTER_YOUR_LAST_NAME}
                        value={lastname}
                        onChangeText={(lastname) => updateState({ lastname })}
                    />
                    <TextInputComp
                        label={Eng.ENTER_USER_NAME}
                        placeholder={Eng.ENTER_USER_NAME}
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
                    btnTxt={Eng.LOGIN}
                    btnStyl={styles.btnStyl}

                />
            </View>
        </WrapperComp>
    );
};
export default SignUpScreen;
