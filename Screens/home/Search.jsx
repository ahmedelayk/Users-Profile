import React, { useState } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Search = ({getSearchWord}) => {
    const [searchText, setsearchText] = useState('');

    const handleChangeText = (val) => {
        setsearchText(val)
        getSearchWord(val)
    }
    return (
        <View>
            <TextInput style={styles.searchInput} value={searchText} onChangeText={handleChangeText}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: "#DDD",
        padding: 20,
        color:"crimson",
        fontSize:28,
        margin: 12,
        borderRadius: 8

    }
})

export default Search;
