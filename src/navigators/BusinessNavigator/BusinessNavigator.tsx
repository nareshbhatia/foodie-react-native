import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SearchScreen } from './SearchScreen';
import { BusinessScreen } from './BusinessScreen';

export type BusinessNavigatorParamList = {
    Search: undefined;
    Business: undefined;
};

const Stack = createStackNavigator<BusinessNavigatorParamList>();

export const BusinessNavigator = () => (
    <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Business" component={BusinessScreen} />
    </Stack.Navigator>
);
