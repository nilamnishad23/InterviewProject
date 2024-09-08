import React from 'react';
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import CustomButton from '../components/CustomButton';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';

// Reusable Text Component
const CustomText = ({ children, style, onPress }) => {
    return <Text style={[styles.text, style]} onPress={onPress}>{children}</Text>;
};

const WelcomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            {/* Top Left and Right Corner Decorations */}
            <Image resizeMode="contain" style={styles.topLeft} source={require('../assets/images/topLeft.png')} />
            <Image resizeMode="contain" style={styles.topRight} source={require('../assets/images/topRight.png')} />

            {/* App Logo */}
            <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/appLogo.png')} />

            {/* Bottom Section */}
            <View style={styles.bottomContainer}>
                <CustomText style={[styles.titleText, { marginTop: scaleHeight(50), }]}>{'Sparkle & Shine Transform'}</CustomText>
                <CustomText style={[styles.titleText, { marginBottom: scaleHeight(50), }]}>{'Your Drive with Every Wash!'}</CustomText>

                <CustomButton
                    style={styles.customButton}
                    color={COLORS.blue}
                    title={'Let’s Start'}
                    onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
                />

                {/* Sign In Option */}
                <Text style={styles.signInText}>
                    <CustomText style={styles.accountText}>{'Already have an account? '}</CustomText>
                    <CustomText
                        onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
                        style={styles.signInLink}>
                        {'Sign in'}
                    </CustomText>
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topLeft: {
        position: 'absolute',
        top: 0,
        left: scaleWidth(-25),
        width: scaleWidth(300),
        height: scaleHeight(300),
    },
    topRight: {
        position: 'absolute',
        top: 0,
        right: scaleWidth(-18),
        width: scaleWidth(228),
        height: scaleHeight(271),
    },
    logo: {
        width: scaleWidth(382),
        height: scaleHeight(280),
        alignSelf: 'center',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: scaleHeight(72),
        alignItems: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: scaleFont(16),
        color: COLORS.gray,

    },
    customButton: {
        width: scaleWidth(300),
    },
    signInText: {
        textAlign: 'center',
        marginTop: scaleHeight(15),
    },
    accountText: {
        fontSize: scaleFont(12),
        color: COLORS.gray,
    },
    signInLink: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: scaleFont(14),
        color: COLORS.darkBlue,
    },
    text: {
        fontSize: scaleFont(14),
    },
});

export default WelcomeScreen;
