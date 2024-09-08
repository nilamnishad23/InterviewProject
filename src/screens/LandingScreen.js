import React, { useEffect } from 'react';
import { Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { scaleWidth, scaleHeight } from '../utils/responsive';

const LandingScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate(ROUTES.WELCOME);
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

            {/* Top Left Corner Decoration */}
            <Image
                resizeMode="contain"
                style={styles.topLeft}
                source={require('../assets/images/topLeft.png')}
            />

            {/* Top Right Corner Decoration */}
            <Image
                resizeMode="contain"
                style={styles.topRight}
                source={require('../assets/images/topRight.png')}
            />

            {/* App Logo */}
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../assets/images/appLogo.png')}
            />

            {/* Bottom Right Corner Decoration */}
            <Image
                resizeMode="contain"
                style={styles.bottomRight}
                source={require('../assets/images/bottomRight.png')}
            />
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
        width: scaleWidth(421),
        height: scaleHeight(309),
        alignSelf: 'center',
    },
    bottomRight: {
        position: 'absolute',
        bottom: scaleHeight(-85),
        right: 0,
        width: scaleWidth(320),
        height: scaleHeight(460),
    },

});

export default LandingScreen;

