import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function LoginScreen({navigation}){

    const onPressHandler = ()=>{
        navigation.replace('Onboarding');
    }

    return(
        <View style= {styles.container}>
            <Text>Login Screen</Text>
            <Button
            title= 'To Onboarding'
            onPress= {onPressHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});