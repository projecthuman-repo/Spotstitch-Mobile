import React, { useEffect } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';


export default function LoginScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('StartScreen');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Background>
            <Logo />
            <Paragraph>Loading....</Paragraph>
        </Background>
    );
}
