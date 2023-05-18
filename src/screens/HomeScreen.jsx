import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import styles from '../utils/styles';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Paginas de Procura:</Text>
            <View style={styles.content}>
                <Button mode="contained" onPress={() => navigation.navigate('Buscar Cor')}>Buscar Cor</Button>
            </View>
            <View style={styles.content}>
                <Button mode="contained" onPress={() => navigation.navigate('Buscar Carro')}>Buscar Carro</Button>
            </View>
            <View style={styles.content}>
                <Button mode="contained" onPress={() => navigation.navigate('Buscar Pessoa')}>Buscar Pessoa</Button>
            </View>
            <View style={styles.content}>
                <Button mode="contained" onPress={() => navigation.navigate('Buscar Fruta')}>Buscar Fruta</Button>
            </View>
            <View style={styles.content}>
                <Button mode="contained" onPress={() => navigation.navigate('Buscar Produto')}>Buscar Produto</Button>
            </View>
            <View style={styles.content}>
                <Button mode="contained" onPress={() => navigation.navigate('Buscar Animal')}>Buscar Animal</Button>
            </View>
        </View>
    );
};

export default HomeScreen;