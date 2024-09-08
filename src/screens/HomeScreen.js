import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ route, navigation }) => {
    const { name } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Wash n Go</Text>
            <Text>Welcome {name}</Text>
            <Button title="Logout" onPress={() => navigation.navigate('SignIn')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontSize: 40,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
