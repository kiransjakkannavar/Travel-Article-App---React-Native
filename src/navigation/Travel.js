import React from 'react';
import { createStackNavigator } from 'react-navigation'
import List from '../screens/List'
import Article from '../screens/Article'

export default createStackNavigator(
    {
        List: List,
        Article: Article
    }, {
        initialRouteName: "List",
        defaultNavigationOptions: {
            //header: null,
            // headerStyle: {
            //     borderBottomColor: 'transparent',
            //     // marginTop: 24,
            //     backgroundColor: 'green'
            // }
        }
    }
) 