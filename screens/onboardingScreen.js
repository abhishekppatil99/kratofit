import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {globalStyles} from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons';

export default function OnboardingScreen({navigation}){

    const onPressHandler = ()=>{ 
        navigation.replace('Login');
    }

    const Next = ({...props})=>{
        return (
            <TouchableOpacity
            style={{marginRight: 32}}
            {...props}
            >
                <MaterialIcons name="navigate-next" size={32} color='#ffffff'/>
            </TouchableOpacity>
        );
    }


    return(
        <View style = {{flex: 1}}>
            <Onboarding
                bottomBarHighlight= {false}
                NextButtonComponent={Next}
                showSkip= {false}
                showDone= {false}
                pages={[
                    {
                        backgroundColor: '#212227',
                        image: <Image source={require('../assets/favicon.png')} />,
                        title: <Text style= {globalStyles.title}>Create, Share, Play</Text>,
                        subtitle: <Text style= {globalStyles.body}>Make your own unique workouts and share it with your friends!</Text>,
                    },
                    {
                        backgroundColor: '#212227',
                        image: <Image source={require('../assets/images/onboarding2.png')} />,
                        title: <Text style= {globalStyles.title}>Customize Workouts</Text>,
                        subtitle: <Text style= {globalStyles.body}>Make customized workouts for yourself or others according to your plan.</Text>,
                    },
                    {
                        backgroundColor: '#212227',
                        image: <Image source={require('../assets/images/onboarding3.png')} />,
                        title: <Text style= {globalStyles.title}>Share them with friends</Text>,
                        subtitle: <Text style= {globalStyles.body}>Share the created workouts with friends so that they can achieve fitness goals too!</Text>,
                    },
            
                ]}
            />
            <View style= {{paddingVertical: 16, paddingHorizontal: 32, backgroundColor: '#212227',}}>
                <TouchableOpacity
                    onPress={onPressHandler}
                    style= {{backgroundColor: '#212227'}}
                    >
                    <View style = {styles.buttonContainer}>
                        <Image source= {require('../assets/images/google.png')}/>
                        <Text style = {styles.buttonText}>Continue Using Google</Text>
                    </View>
                    
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#212227',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#FF2140',
    },
    buttonText: {
        marginLeft: 16,
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'ubuntu-bold',
        textAlign: 'center'
    }
});