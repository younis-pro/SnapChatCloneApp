import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import Colors from '../Constants/Colors';

const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal transparent>
                <View style={styles.loaderStyle}>
                    <ActivityIndicator color={Colors.Blue_Color} />
                </View>
            </Modal>

        )
    } return null;
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    loaderStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
});
export default Loader;
