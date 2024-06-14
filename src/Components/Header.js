import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// resposive library
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
const Header = ({
    onPress,
    headerStyle = {}
}) => {
    const navigation = useNavigation()
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <TouchableOpacity
                onPress={!!onPress ? onPress : () => navigation.goBack()}
            >
                <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    headerStyle: {
        height: scale(40),
    },
});
export default Header;
