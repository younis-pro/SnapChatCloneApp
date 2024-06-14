import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as MediaLibrary from 'expo-media-library'
import { shareAsync } from 'expo-sharing';
import styles from './style';
import { moderateScale } from 'react-native-size-matters';

const CameraScreen = () => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibrary, sethasMediaLibrary] = useState();
    const [photo, setPhoto] = useState();
    const [type, setType] = useState(Camera.Constants.Type.back);
    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermision = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === 'granted');
             sethasMediaLibrary(mediaLibraryPermision.status === 'granted');
        })();
    }, []);
    if (hasCameraPermission === null) {
        return <View />;
    }
    if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    };

    if (photo) {
        let sharePic = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            });
        };
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
                <TouchableOpacity onPress={sharePic} >
                    <Text style={styles.textStyle}>Share</Text>
                </TouchableOpacity>
                {hasMediaLibrary ? <TouchableOpacity onPress={savePhoto} >
                    <Text style={styles.textStyle}>Save</Text>
                </TouchableOpacity> : undefined}
                <TouchableOpacity style={{}} onPress={() => setPhoto(undefined)} >
                    <Text style={styles.textStyle}>Discard </Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1, justifyContent: 'flex-end', }} type={type} ref={cameraRef} >

                <View
                    style={{
                        flex: 0.05,
                        backgroundColor: 'transparent',

                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginHorizontal: moderateScale(20) }}>
                        <View />
                        <TouchableOpacity onPress={takePic} style={{ marginLeft: moderateScale(20) }}>
                            <Ionicons name='camera' size={40} color={"white"} />
                        </TouchableOpacity>

                        <TouchableOpacity

                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Ionicons style={{}} name="camera-reverse-sharp" size={40} color="white" />

                        </TouchableOpacity>

                    </View>
                </View>
            </Camera>
        </View>
    );
}
export default CameraScreen;
