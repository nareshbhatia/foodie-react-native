import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BusinessNavigator } from './navigators';

export const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationNativeContainer>
                <BusinessNavigator />
            </NavigationNativeContainer>
        </SafeAreaProvider>
    );
};
