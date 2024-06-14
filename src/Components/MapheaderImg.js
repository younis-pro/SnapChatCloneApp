import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import Colors from '../Constants/Colors';

const MapheaderImg = ({
    onPress,
    txt,
}) => {
    return (
        <TouchableOpacity style={{ alignItems: 'center' }}>

            <Image style={styles.imgStyle} source={{ uri: 'https://i.pinimg.com/474x/a7/e8/ca/a7e8cafb4f60254d40acd791a3aead7d.jpg' }} />
            <View style={styles.BtmViewStyle}>
                <Text style={styles.txtStyle}>
                    {txt}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    BtmViewStyle: {
        padding: moderateScale(4),
        borderRadius: moderateScale(24),
        backgroundColor: Colors.White_Color,
        alignSelf: 'flex-start',

    },
    txtStyle: {
        fontSize: scale(12),
        color: Colors.Black_Color,
        alignSelf: 'center',

    },
    imgStyle: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(25),

    }

});
export default MapheaderImg;
