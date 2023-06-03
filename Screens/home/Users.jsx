import React from 'react';
import { useState } from 'react';
import {FlatList, StyleSheet, SafeAreaView, Text, View, Pressable} from 'react-native';

const Users = ({filterdUsers, handleClickDetails}) => {
    
    const handlePressDetails = ()=>{
        console.warn("Pressed");
        
    }
    return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={filterdUsers}
            renderItem={({item}) => 
                <View style={styles.userContainer}>
                    <Text>{item.name}</Text>
                    <Pressable onPress={()=>{ handleClickDetails(item) }} style={styles.detailsBtn}>
                        <Text style={styles.detailsBtnText}>Details</Text>
                    </Pressable>
                </View>
            }
            keyExtractor={item => item.id}
        />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    userContainer: {
        backgroundColor:"#DDD",
        display: 'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        padding: 8,

    },
    detailsBtn: {
        backgroundColor: "#9988FF",
        padding: 2,
        borderRadius: 4
    },
    detailsBtnText: {
        color: "#FEFEFE"
    }
})

export default Users;
