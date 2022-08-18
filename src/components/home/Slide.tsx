import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import AddCart from './AddCart';

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const Slide = ({ data, shouldPlay }: { data: any, shouldPlay: boolean }) => {

    const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
    const [likeasNumber, setLikeasNumber] = useState(0);
    const [unit, setUnit] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <View
            style={styles.container}
        >
            <Video
                style={styles.video}
                source={{
                    uri: data.url
                }}
                useNativeControls
                isLooping
                resizeMode={ResizeMode.COVER}
                shouldPlay={shouldPlay}
            />
            <View
                style={styles.likeasButtonGroup}
            >
                <TouchableOpacity style={styles.likeasButton} onPress={() => {
                    setLikeasNumber(likeasNumber + 1);
                    if (likeasNumber < 999) {
                        if (unit !== '') setUnit('');
                    } else if (likeasNumber < 1000000) {
                        if (unit !== 'K') setUnit('K');
                    } else {
                        if (unit !== 'M') setUnit('M');
                    }
                }}>
                    <Image
                        source={require('../../../assets/likeas.png')}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
                <Text
                    style={styles.likeasButtonText}
                >
                    {unit === '' ? likeasNumber : (unit === 'K' ? (likeasNumber / 1000).toFixed(1) : (likeasNumber / 1000000).toFixed(1))}{unit}
                </Text>
            </View>
            {
                !isAddedToCart ?
                    <View style={styles.cart}>
                        <View style={styles.avatar}>
                            <Image
                                source={require('../../../assets/adaptive-icon.png')}
                                style={{ width: '100%', height: '100%', borderRadius: 100, borderColor: '#fc03ba', borderWidth: 2 }}
                            />
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.text} >
                                $140
                            </Text>
                            <Text style={styles.text}>
                                #Ediuk SKAll
                            </Text>
                            <Text style={styles.text}>
                                This is Line 32323232323232323223232232323232232323
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            setIsVisible(true);
                        }}>
                            <Text
                                style={styles.buttonText}
                            >
                                ADD TO CART
                            </Text>
                        </TouchableOpacity>
                    </View> :
                    <View style={styles.note}>
                        <Image
                            source={require('../../../assets/checked.png')}
                            style={{
                                width: 35,
                                height: 35
                            }}
                        />
                        <Text style={styles.noteText}>
                            Added to cart
                        </Text>
                    </View>
            }
            <AddCart isVisible={isVisible} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f00',
        alignItems: 'center',
        // justifyContent: 'center',
        position: 'relative',
        height: windowHeight
    },
    video: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    likeasButtonGroup: {
        position: 'absolute',
        top: '50%',
        right: 20,
    },
    likeasButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 100
    },
    likeasButtonText: {
        width: 50,
        color: '#fff',
        textAlign: 'center'
    },
    cart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 30,
        alignItems: 'center',
        position: 'absolute',
        bottom: 100,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '95%',
        height: 100,
        padding: 10,
        borderRadius: 20
    },
    avatar: {
        // backgroundColor: '#0f0',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        width: 70,
        height: 70,
    },
    info: {
        flex: 1,
        color: '#ffffff',
        margin: 10,
        height: '100%'
    },
    text: {
        color: '#ffffff',
        fontWeight: '800',
        overflow: 'hidden',
        // textOverflow: 'ellipsis'
        // overflow: hidden,
        // text-overflow: 'ellipsis'
    },
    button: {
        backgroundColor: '#fc03ba',
        margin: 10,
        borderRadius: 10,
        width: 85,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 3,
        shadowColor: '#fff',

    },
    buttonText: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '700',
        margin: 5,
        textAlign: 'center'
    },
    note: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'absolute',
        borderRadius: 15,
        width: '90%',
        bottom: 80,
        height: 70,
        padding: 10,
    },
    noteText: {
        fontSize: 16,
        fontWeight: '800',
        paddingLeft: 20
    }
});

export default Slide;