import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

/**
    * Firebase Component
    * @returns {object}
*/
import { db } from '../config/firebase';

/**
    * Firebase Component
    * @returns {object}
*/
import { collection, query, where, getDocs } from 'firebase/firestore';

/**
    * Styles Component
    * @returns {object}
*/
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

/**
    * Functional Component
    * @returns {JSX}
*/
const BuscarCarro = () => {

    /**
        * States Component
        * @returns {object}
    */
    const [getNameCar, setNameCar] = useState('');
    const [getCar, setCar] = useState([]);
    const [getAllCars, setAllCars] = useState([]);
    
    /**
        * Query Cars
        * @returns {name}
    */
    async function queryCar(name = null) {
        try{
            const queryList = query(collection(db, 'carros'), where('nomeDoCarro', '==', name));
            const queryResult = await getDocs(queryList);
            
            const cars = [];
            queryResult.forEach((doc) => {
                cars.push(doc.data());
            });

            setCar(cars);
        }catch (error) {
            console.log(error);
        }
    };

    /** 
     * Query All Cars
     * @returns {name}
    */
    async function queryAllCars() {
        try{
            const allList = query(collection(db, 'carros'));
            const queryAllResult = await getDocs(allList);

            const allNames = [];
            queryAllResult.forEach((doc) => {
                allNames.push(doc.data());
            });
            
            setAllCars(allNames);
        }catch (error) {
            console.log(error);
        }
    };
    
    /**
     * UseEffect Component
     * @returns {object}
    */
    useEffect(() => {
        queryCar(getNameCar);
        queryAllCars();
    }, [getNameCar]);

    /**
        * Return Component
        * @returns {JSX} - BuscarCarro
    */
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text style={[styles.bold, {marginBottom: '5px'}]}>Nome(s):</Text>
                <View style={styles.modalContent}>
                    <FlatList data={getAllCars} renderItem={({item}) => (
                        <Text style={styles.item}>• {item.nomeDoCarro}</Text>
                    )} key={(item) => item.id} />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Insira um nome listado a cima:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Carro' value={getNameCar} onChangeText={setNameCar} />
            </View>
            <View style={styles.content}>
                <FlatList data={getCar} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nomeDoCarro}</Text>
                        <Text style={styles.bold}>Modelo: {item.modeloDoCarro}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

/**
    * Exporting Component
    * @returns {JSX}
*/
export default BuscarCarro;