import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// responsive library
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import RoundImgComp from './RoundImgComp';

const MainHeader = ({
    onPress,
    headerStyle = {},
    centerText,
    lastIcone,
    sideIcon
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <RoundImgComp
                    image={'https://i.pinimg.com/474x/a7/e8/ca/a7e8cafb4f60254d40acd791a3aead7d.jpg'}
                />

                <Ionicons style={{ marginLeft: 20 }} name="search" size={23} color="black" />
            </View>
            <View style={{flex:1,alignItems:'center'}}>
            <Text style={{ fontWeight: 'bold', fontSize: scale(18),  }}>{centerText}</Text>
            </View>
            
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons style={{ marginRight: moderateScale(20) }} name={sideIcon} size={20} color="black" />
                <Ionicons style={{ marginRight: moderateScale(20) }} name={lastIcone} size={20} color="black" />

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        marginTop: verticalScale(20),
        flexDirection: 'row',

        justifyContent: "space-between",
        alignItems: 'center',
    },

});
export default MainHeader;
