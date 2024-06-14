import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Colors from '../Constants/Colors';
import Loader from './Loader';
const WrapperComp = ({
    barStyle = 'dark-content',
    statusBarColor = Colors.White_Color,
    isloading,
    children
}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
            <Loader isLoading={isloading} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,



    },
});
export default WrapperComp;
