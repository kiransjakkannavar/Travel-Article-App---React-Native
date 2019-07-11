import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    column: {
        flexDirection: "column"
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        backgroundColor: "white",
        // padding: 12,
        // paddingTop: 36,
        paddingHorizontal: 36,
        paddingTop: 48,
        paddingBottom: 24,
    },
    articles: {
        paddingHorizontal: 36
    },
    destination: {
        width: width - (36 * 2),
        borderRadius: 12,
        backgroundColor: 'pink'
    }

})

export default class List extends Component {

    static navigationOptions = {
        header: (
            <View style={[styles.flex, styles.row, styles.header]}>
                <View>
                    <Text>Search for place</Text>
                    <Text>Destination</Text>
                </View>
                <View>
                    <Text>Avatar</Text>
                </View>
            </View>
        )
    }

    renderDestinations = () => {
        return (
            <View styles={[styles.flex, styles.column]}>
                <ScrollView horizontal
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={16}
                    snapToAlignment="center">
                    <View style={[styles.flex, styles.destination]}>
                        <Text>Destination 1</Text>
                    </View>
                    <View style={[styles.flex, styles.destination]}>
                        <Text>Destination 2</Text>
                    </View>
                    <View style={[styles.flex, styles.destination]}>
                        <Text>Destination 3</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }

    renderRecomended = () => {
        return (
            <View styles={[styles.flex, styles.column]}>
                <Text>Recomended </Text>
            </View>
        )
    }


    render() {
        return (
            <View styles={[styles.flex, styles.articles]}>
                {this.renderDestinations()}
                {this.renderRecomended()}
            </View>
        );
    }
}

