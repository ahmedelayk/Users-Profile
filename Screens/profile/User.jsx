import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const usersImages = [
    require('../../assets/images/user-male-1.jpg'),
    require('../../assets/images/user-male-2.jpg'),
    require('../../assets/images/user-male-3.jpg'),
    require('../../assets/images/user-male-4.jpg'),
    require('../../assets/images/user-male-5.jpg'),
    require('../../assets/images/user-female-1.jpg'),
    require('../../assets/images/user-female-2.jpg'),
    require('../../assets/images/user-female-3.jpg'),
    require('../../assets/images/user-female-4.jpg'),
    require('../../assets/images/user-female-5.jpg'),
]

const User = ({route}) => {
    const [user, setuser] = useState(route.params.user);
    console.warn(route.params)
    return (
        <View>
            <Image style={styles.image} source={usersImages[user.id-1]} />
            <Text>{user.name}</Text>
            <Text>{user.email}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.website}</Text>
            <Text>{user.address.city}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height:300
    }
})

export default User;
