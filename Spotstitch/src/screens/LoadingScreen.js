import React, { useEffect } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Paragraph from '../components/Paragraph';

export default function LoadingScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('LoginScreen');
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Background>
            <Logo />
            <Paragraph>SPOTSTITCH</Paragraph>
        </Background>
    );
}