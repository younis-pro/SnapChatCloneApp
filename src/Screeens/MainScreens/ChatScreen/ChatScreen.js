
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, RefreshControl } from 'react-native';
import MainHeader from '../../../Components/MainHeader';
import WrapperComp from '../../../Components/WrapperComp';
import Ionicons from '@expo/vector-icons/Ionicons';
import RoundImgComp from '../../../Components/RoundImgComp';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import actions from '../../../redux/actions';
import styles from './style';
const ChatScreen = () => {
    const [state, setState] = useState({
        isloading: false,
        isRefresh: false,
        data: []
    })
    const { isloading, data, isRefresh, } = state;
    const updateState = (data) => setState((state) => ({ ...state, ...data }))
    useEffect(() => {
        apiHit(true)
    }, []);
    const apiHit = async () => {
        updateState({ isloading: true })
        try {
            const res = await actions.getUsers()
            updateState({
                data: res.data,
                isloading: false,
            })
        } catch (error) {
            updateState({ isloading: false })
        }
    }
    const renderItems = ({ item, index }) => {
        return (
            <View style={styles.flatStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RoundImgComp
                        image={item.image}
                        size={50}
                    />
                    <View style={{ marginLeft: moderateScale(8), }}>

                        <Text style={styles.nameStyle}>{item.firstName}</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.snapStyle}> New Snap </Text>
                            <Text style={styles.timeStyle}> {"2h"}</Text>
                            <Text style={styles.streakStyle}>{"120"}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RoundImgComp
                        image={'https://image.similarpng.com/very-thumbnail/2020/07/emoji-with-hearts-png.png'}
                        size={20}
                    />
                    <View style={styles.verticalLine} />
                    <Ionicons style={{ marginRight: moderateScale(20) }} name='chatbubble-ellipses-outline' size={20} />
                </View>
            </View>
        )
    }
    return (
        <WrapperComp isloading={isloading}>
            <MainHeader centerText={'Chat'} lastIcone={"chatbubble-ellipses"}
                sideIcon={'person-add'}
            />
            <FlatList
                data={data}
                renderItem={renderItems}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
                showsVerticalScrollIndicator={false}

                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}

                    />}

            />
        </WrapperComp>
    );
};
export default ChatScreen;
