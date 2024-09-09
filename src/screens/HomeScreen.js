import React, { useCallback, useEffect, useState } from 'react';
import { Image, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('');

    const removeUserName = async () => {
        try {
            await AsyncStorage.removeItem('userName');
        } catch (error) {
            console.error("Error removing data:", error);
        }
    };
    // Handle logout action
    const handleLogout = useCallback(() => {
        removeUserName();
        navigation.navigate(ROUTES.SIGN_IN);
    }, [navigation]);

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('userName');
                if (value !== null) {
                    setUserName(value);
                }
            } catch (error) {
                console.error("Error retrieving data:", error);
            }
        };

        retrieveData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../assets/images/appLogo.png')}
                accessible={true}
                accessibilityLabel="App Logo"
            />
            <Text style={styles.title}>{`Welcome ${userName}`}</Text>
            <CustomButton
                style={styles.customButton}
                color={COLORS.blue}
                title={'Logout'}
                onPress={handleLogout}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    logo: {
        marginTop: scaleHeight(10),
        width: scaleWidth(233),
        height: scaleHeight(170),
        alignSelf: 'center',
    },
    customButton: {
        marginTop: scaleHeight(35),
        width: scaleWidth(300),
        alignSelf: 'center',
    },
    title: {
        marginVertical: scaleHeight(70),
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: scaleFont(24),
        color: COLORS.black,
    },
});

export default HomeScreen;

