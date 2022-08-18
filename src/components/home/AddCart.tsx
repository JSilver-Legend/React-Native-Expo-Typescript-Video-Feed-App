import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-banner-carousel-updated';
import RBSheet from "react-native-raw-bottom-sheet";

const exampleItems = [
    {
        title: 'Item 1',
        text: 'Text 1',
    },
    {
        title: 'Item 2',
        text: 'Text 2',
    },
    {
        title: 'Item 3',
        text: 'Text 3',
    },
    {
        title: 'Item 4',
        text: 'Text 4',
    },
    {
        title: 'Item 5',
        text: 'Text 5',
    },
];

const descriptionData = [
    {
        text: 'A perfurm that captures hearts is beautiful thing for everyone.'
    },
    {
        text: 'A perfurm that captures hearts is beautiful thing for everyone.'
    },
    {
        text: 'A perfurm that captures hearts is beautiful thing for everyone.'
    },
    {
        text: 'A perfurm that captures hearts is beautiful thing for everyone.'
    }
]

const AddCart = ({ isVisible, setCart, setVisibleState }: { isVisible: boolean, setCart: any, setVisibleState: any }) => {

    const refRBSheet = useRef<any>();

    useEffect(() => {
        if (isVisible) refRBSheet.current.open();
    }, [isVisible]);

    return (
        <RBSheet
            ref={refRBSheet}
            height={640}
            openDuration={250}
            closeDuration={250}
            customStyles={{
                container: styles.container
            }}
            onClose={() => {
                setVisibleState();
            }}
        >
            <TouchableOpacity onPress={() => {
                refRBSheet.current.close();
                setVisibleState();
            }}>
                <Image
                    source={require('../../../assets/menu-close.png')}
                    style={{ width: 30, height: 30, position: 'absolute', right: 0, top: -45, }}
                />
            </TouchableOpacity>
            <View style={styles.carousel} >
                <Carousel
                    loop
                >
                    {exampleItems.map((item, index) => (
                        <View style={styles.carouselSlide} key={index}>
                            <Image
                                source={require('../../../assets/glasses.png')}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </View>
                    ))}
                </Carousel>
            </View>
            <View style={styles.dataInfo} >
                <View style={styles.noteLine}>
                    <Text style={styles.noteLineText}>
                        Top Notes: Bergamot, Grape Fruit, Apple
                    </Text>
                    <Text style={styles.noteLineBadge}>
                        EXCLUSIVE
                    </Text>
                </View>
                <View style={styles.costLine}>
                    <View>
                        <Text style={styles.costLineComment}>
                            Royalty Eau de Parfum - 100ml
                        </Text>
                    </View>
                    <View style={styles.price} >
                        <Text style={styles.discountedPrice} >
                            $140
                        </Text>
                        <Text style={styles.currentPrice}>
                            $99
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.actorLine}>
                <View style={styles.actorLineAvatar}>
                    <Image
                        source={require('../../../assets/avatar.jpg')}
                        style={{ width: 50, height: 50, borderRadius: 100 }}
                    />
                    <View style={styles.actorLineInfo} >
                        <View style={styles.actorLineName}>
                            <Text style={styles.commentText}>
                                By
                            </Text>
                            <Text style={styles.commentBoldText}>
                                Maged el Masry
                            </Text>
                        </View>
                        <View style={styles.actorLineCountry} >
                            <Text style={styles.commentText}>
                                Actors
                            </Text>
                            <Text style={styles.commentBoldText} >
                                Egypt
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.actorLineReview}>
                    <View style={styles.actorLineStar}>
                        <Image
                            source={require('../../../assets/star.png')}
                            style={{ width: 20, height: 20, marginRight: 5 }}
                        />
                        <Text style={styles.commentBoldText} >
                            4.9
                        </Text>
                    </View>
                    <Text style={styles.reviewText}>
                        33 Reviews
                    </Text>
                </View>
            </View>
            <View style={styles.descriptionLine}>
                <Text style={styles.descriptionLineTitle}>
                    Description
                </Text>
                <View style={styles.descriptionLineContent}>
                    {descriptionData.map((item, index) => (
                        <Text style={styles.descriptionLineText} key={index}>
                            {
                                item.text.toString().length > 25 ? item.text.toString().substring(0, 25) + '...' : item.text
                            }
                        </Text>
                    ))}
                </View>
            </View>
            <View style={styles.buttonLine}>
                <TouchableOpacity style={styles.addVideoPreview} >
                    <Image
                        source={require('../../../assets/video_preview.png')}
                        style={{ width: 25, height: 25 }}
                    />
                    <Text style={styles.buttonText}>
                        ADD VIDEO PREVIEW
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCart} onPress={() => {
                    refRBSheet.current.close();
                    setCart();
                    setVisibleState();
                }}>
                    <Image
                        source={require('../../../assets/shopping_basket.png')}
                        style={{ width: 25, height: 25 }}
                    />
                    <Text style={styles.buttonText}>
                        ADD TO CART
                    </Text>
                </TouchableOpacity>
            </View>
        </RBSheet>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 60
    },
    carousel: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        height: 200,
    },
    carouselSlide: {
        height: 200,
    },
    dataInfo: {
        padding: 10,
    },
    noteLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    noteLineText: {
        fontSize: 12,
        fontWeight: '800',
        color: '#555',
        alignItems: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    noteLineBadge: {
        backgroundColor: '#fc03ba',
        borderRadius: 5,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '800',
        paddingLeft: 10,
        paddingRight: 10,
        color: '#fff'
    },
    costLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,
        borderBottomColor: '#333',
        borderBottomWidth: 0.5,
    },
    costLineComment: {
        width: 150,
        fontWeight: '800',
        color: '#000',
        fontSize: 14,
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    discountedPrice: {
        fontWeight: '800',
        color: '#000',
        fontSize: 20,
        textDecorationLine: 'line-through',
    },
    currentPrice: {
        marginLeft: 12,
        fontWeight: '800',
        color: '#fc03ba',
        fontSize: 20,
    },
    actorLine: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actorLineAvatar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    actorLineInfo: {
        flexDirection: 'column',
        marginLeft: 10,
        alignItems: 'flex-start',
    },
    actorLineName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actorLineCountry: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    actorLineReview: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    actorLineStar: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    reviewText: {
        color: '#000',
        fontSize: 10,
        marginTop: 4,
    },
    commentText: {
        marginRight: 5
    },
    commentBoldText: {
        fontWeight: '800',
        color: '#000',
        fontSize: 14,
    },
    descriptionLine: {
        marginTop: 10,
    },
    descriptionLineTitle: {
        marginBottom: 10,
        fontWeight: '800',
    },
    descriptionLineContent: {
        height: 65,
        overflow: 'hidden',
    },
    descriptionLineText: {
        fontSize: 11,
        fontWeight: '500'
    },
    buttonLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    addVideoPreview: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 120,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 7,
    },
    addToCart: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 200,
        backgroundColor: '#fc03ba',
        borderRadius: 7,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 12,
        marginLeft: 10
    }
})

export default AddCart