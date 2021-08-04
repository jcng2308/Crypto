import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
const image = require('../../../assets/images/Saly-1.png');

const HomeScreen = () => {
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={image} />
            <Text style={styles.header1}>Welcome to VirtualCrypto</Text>
            <Text style = {styles.header2}>Invest your $100,000 and earn a spot in the top leaderboard!</Text> 
        </View>
    );
};

export default HomeScreen;