import React from 'react';
import {Image, View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import UserRankingItem from "../../../components/UserRankingItem";

const image = require('../../../assets/images/Saly-21.png');

const portfolioCoins = [{
    id: '1',
    name: 'Virtual Dollars',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    netWorth: 69420
}, {
    id: '2',
    name: 'Bitcoin',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    netWorth: 69420,
}, {
    id: '3',
    name: 'Etherium',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    netWorth: 30120,
},
]


const PortfolioScreen = () => {
    return (
        <View style={styles.root}>
            <FlatList
            style={{width: '100%'}}
                data={portfolioCoins}
                renderItem={({item, index}) => <UserRankingItem user= {item} place={index + 1}/>}
                showsVerticalScrollIndicator={false}
                ListHeaderComponentStyle={{alignItems:'center'}}
                ListHeaderComponent={() => (
                    <>
                        <Image style={styles.image} source={image} />
                        <Text style={styles.label}>Rankings</Text>
                    </>
                )}
            />
        </View>
    );
};

export default PortfolioScreen;