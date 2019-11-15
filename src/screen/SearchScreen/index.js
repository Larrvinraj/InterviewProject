import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles'

const DATA = [
    {
        id: 1,
        name: 'One'
    },
    {
        id: 2,
        name: 'One'
    },
    {
        id: 3,
        name: 'One'
    },
    {
        id: 4,
        name: 'One'
    },
    {
        id: 5,
        name: 'One'
    },
    {
        id: 6,
        name: 'One'
    },
    {
        id: 7,
        name: 'One'
    },
    {
        id: 8,
        name: 'One'
    },
    {
        id: 9,
        name: 'One'
    },
    {
        id: 10,
        name: 'One'
    },
    {
        id: 11,
        name: 'One'
    },
    {
        id: 12,
        name: 'One'
    },
    {
        id: 13,
        name: 'One'
    },
    {
        id: 14,
        name: 'One'
    },
    {
        id: 15,
        name: 'One'
    },
    {
        id: 16,
        name: 'One'
    },
    {
        id: 17,
        name: 'One'
    },
    {
        id: 18,
        name: 'One'
    }
]


export class SearchScreen extends Component {
    state = {
        keyword: '',
        data: []//pass return data from API and pass to flatlist
    }

    onSearchClicked() {
        const keyword = this.state.keyword

        keyword.trim()
        //Call API and pass keyword
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.topInnerContainer}>
                        <TextInput style={styles.textInputStyle} onChangeText={(value) => this.setState({ keyword: value })} />
                        <TouchableOpacity style={styles.searchButton} onPress={() => this.onSearchClicked()}>
                            <Text style={styles.searchButtonText}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomInnerContainer}>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <View style={styles.flatlistSection}>
                                <Text style={{ fontSize: 20 }}>{item.name}</Text>
                            </View>}
                            keyExtractor={item => item.id}
                            style={{ paddingHorizontal: 20 }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default SearchScreen
