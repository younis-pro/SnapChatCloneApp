import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';

const RoundImgComp = ({
    size = 40,
    image,
    style = {}
}) => {
    return (
        <View >
            <Image
                source={{ uri: image }}
                style={{
                    height: scale(size),
                    width: scale(size),
                    borderRadius: moderateScale(size / 2),
                    marginLeft: moderateScale(10),
                    ...style
                }}

            />
        </View>
    );
};


export default RoundImgComp;
