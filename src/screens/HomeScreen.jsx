import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import styles from '../utils/styles';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.bold]}>Paginas de Procura ❓</Text>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Cor')}>Procurar Cor</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Carro')}>Procurar Carro</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Pessoa')}>Procurar Pessoa</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Fruta')}>Procurar Fruta</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Produto')}>Procurar Produto</Button>
            </View>
            <View style={styles.content}>
                <Button style={{width: '50vw'}} mode='contained' onPress={() => navigation.navigate('Buscar Animal')}>Procurar Animal</Button>
            </View>
        </View>
    );
};

export default HomeScreen;