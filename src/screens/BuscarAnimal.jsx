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
const BuscarAnimal = () => {

    /**
        * States Component
        * @returns {object}
    */
    const [getNameAnimal, setNameAnimal] = useState('');
    const [getAnimal, setAnimal] = useState([]);
    const [getAllAnimals, setAllAnimals] = useState([]);
    
    /**
        * Query animals
        * @returns {name}
    */
    async function queryAnimals(name = null) {
        try{
            const queryName = query(collection(db, 'animais'), where('nomeDoAnimal', '==', name));
            const queryResult = await getDocs(queryName);
            
            const animal = [];
            queryResult.forEach((doc) => {
                animal.push(doc.data());
            });

            setAnimal(animal);
        }catch (error) {
            console.log(error);
        }
    };

    /** 
     * Query All Animals
     * @returns {name}
    */
    async function queryAllAnimals() {
        try{
            const allList = query(collection(db, 'animais'));
            const queryAllResult = await getDocs(allList);

            const allNames = [];
            queryAllResult.forEach((doc) => {
                allNames.push(doc.data());
            });
            
            setAllAnimals(allNames);
        }catch (error) {
            console.log(error);
        }
    };

    /**
     * UseEffect Component
     * @returns {object}
    */
    useEffect(() => {
        queryAnimals(getNameAnimal);
        queryAllAnimals()
    }, [getNameAnimal]);

    /**
        * Return Component
        * @returns {JSX} - BuscarAnimal
    */
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text style={[styles.bold, {marginBottom: '5px'}]}>Nome(s):</Text>
                <View style={styles.modalContent}>
                    <FlatList data={getAllAnimals} renderItem={({item}) => (
                        <Text style={styles.item}>• {item.nomeDoAnimal}</Text>
                    )} key={(item) => item.id} />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Insira um nome listado a cima:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Animal' value={getNameAnimal} onChangeText={setNameAnimal} />
            </View>
            <View style={styles.content}>
                <FlatList data={getAnimal} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nomeDoAnimal}</Text>
                        <Text style={styles.bold}>Espécie: {item.especieDoAnimal}</Text>
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
export default BuscarAnimal;