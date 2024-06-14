import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, RefreshControl, TouchableOpacity, ImageBackground,} from 'react-native';
import MainHeader from '../../../Components/MainHeader';
import WrapperComp from '../../../Components/WrapperComp';
import Ionicons from '@expo/vector-icons/Ionicons';
import RoundImgComp from '../../../Components/RoundImgComp';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import actions from '../../../redux/actions';
import styles from './style';
import { data } from '../../../Constants/data';
import Colors from '../../../Constants/Colors';
import { LogBox } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
const StoriesScreen = (props) => {
    const [state, setState] = useState({
        isloading: false,
    })
    const { isloading, } = state;
    const renderStories = ({ item, index }) => {
        return (
            <View>
                <View style={{ alignItems: "center", }}>
                    <RoundImgComp image={item.img}
                        size={80}
                        style={{ marginRight: 10 }}
                    />
                    <Text style={{}}>{item.name}</Text>
                </View>
            </View>
        )
    }
    const renderQuickAdd = ({ item, index }) => {
        return (
            <View style={styles.quickStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <RoundImgComp
                        image={item.img}
                        size={45}
                    />
                    <View style={{ marginLeft: moderateScale(8) }}>
                        <Text style={{}}>{item.name}</Text>
                        <Text style={{ fontSize: 10 }}>Recently Joined</Text>
                    </View>
                    <View style={styles.addbtn}>
                        <TouchableOpacity>
                            <Text>+ Add</Text>

                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={{ marginLeft: 20, }}>
                        <Ionicons name='close' size={15} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const renderSubscription = ({ item, index }) => {
        return (
            <ImageBackground
                source={{ uri: item.img }}
                borderRadius={8}
                style={styles.subscriptionView}
            >
                <View >
                    <Text style={{ fontWeight: 'bold', fontSize: scale(14), color: Colors.White_Color }}>
                        {item.name}
                    </Text>
                    <Text style={{ fontSize: scale(12), color: Colors.White_Color }}>
                        Mon
                    </Text>
                </View>
            </ImageBackground>
        )
    }
    const renderDiscover = ({ item, index }) => {
        return (
            <ImageBackground
                source={{ uri: item.img }}
                borderRadius={8}
                style={styles.discoverView}
            >
                <View >
                    <Text style={{ fontWeight: 'bold', fontSize: scale(14), color: Colors.White_Color }}>
                        {item.name}
                    </Text>
                    <Text style={{ fontSize: scale(12), color: Colors.White_Color }}>
                        Mon
                    </Text>
                </View>
            </ImageBackground>
        )
    }

    // React.useEffect(() => {
    //     LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    // }, [])
    return (
        <WrapperComp isloading={isloading}>
            <MainHeader centerText={'Stories'} lastIcone={"chatbubble-ellipses"}
                sideIcon={'person-add'}
            />

            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}
             nestedScrollEnabled={true} scrollEnabled={true} >
          
                <Text style={styles.friendsHeadr}>Friends</Text>
                <View >
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={renderStories}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(10) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(10) }}/>}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(10) }} />}
                        showsHorizontalScrollIndicator={false}
                        
                    />
                </View>
                <View style={{ marginTop: moderateVerticalScale(16), }}>
                    <Text style={styles.friendsHeadr}>Quick Add</Text>
                    <FlatList

                        horizontal
                        data={data}
                        renderItem={renderQuickAdd}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(10) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(10) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(10) }} />}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ marginTop: moderateVerticalScale(16), }}>
                    <Text style={styles.friendsHeadr}>Subsciption</Text>

                    <FlatList
                        horizontal
                        data={data}
                        renderItem={renderSubscription}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(10) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(10) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(10) }} />}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={{ marginVertical: moderateVerticalScale(16), }}>
                    <Text style={styles.friendsHeadr}>Discover</Text>
                    <FlatList
                        data={data}
                        renderItem={renderDiscover}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateScale(10) }} />}
                        numColumns={2}
                    />
                </View>

            
            </ScrollView>

        </WrapperComp>
    );
};
export default StoriesScreen;
