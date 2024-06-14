import Ionicons from '@expo/vector-icons/Ionicons';
import React, { Component,useState,useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MainHeader from '../../../Components/MainHeader';
import MapheaderImg from '../../../Components/MapheaderImg';
import Eng from '../../../Constants/Lang/Eng';
import { data } from './data';
import { getAddressFromLatLong } from '../../../utils/helperFunctions';
import styles from './style';
const MapScreen = () => {
    const [curLoc, setcurLoc] = useState({
        latitude: 30.060400,
        longitude: 70.635063,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [address, setaddress] = useState('');
    const mapRef = useRef();
    const onCenter =()=>{
        mapRef.current.animateToRegion(curLoc)
    }
    const onRegionChange = async (props) =>{
        const {latitude, longitude} = props
        const res = await getAddressFromLatLong(`${latitude}, ${longitude}`)
        setaddress(res.address)
    }
    return (
        <View style={{ flex: 1 }}>
            <MapView
            ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={curLoc}
                onRegionChangeComplete={onRegionChange}
            >
                {data.map((val, i)=>{
                    return(
                        <Marker 
                coordinate={val.coords}
                image={val.img}
                val={val}
                key={i}
                />
                    )
                })}
            </MapView>
            <View style={styles.headerViewStyle}>
                <MainHeader
                lastIcone={'settings'}
                centerText={address}
                />
            </View>
            <View style={styles.btomheader}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <MapheaderImg
                        txt={Eng.MY_BIT_EMOJI}
                    />
                    <TouchableOpacity onPress={onCenter} style={styles.iconStyle}>
                        <Ionicons name='navigate' size={30} />
                    </TouchableOpacity>
                    <MapheaderImg
                        txt={Eng.My_FRIENDS}
                    />
                </View>

            </View>
        </View>
    );
};
export default MapScreen;
