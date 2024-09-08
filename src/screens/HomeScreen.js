import React, { useCallback } from 'react';
import { Image, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';

const HomeScreen = ({ navigation }) => {
    // Handle logout action
    const handleLogout = useCallback(() => {
        navigation.navigate(ROUTES.SIGN_IN);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            {/* App Logo */}
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../assets/images/appLogo.png')}
                accessible={true}
                accessibilityLabel="App Logo"
            />

            {/* Welcome Text */}
            <Text style={styles.title}>{'Welcome Ramesh'}</Text>

            {/* Bottom Section */}
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
        marginVertical: scaleHeight(60),
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: scaleFont(24),
        color: COLORS.black,
    },
});

export default HomeScreen;


