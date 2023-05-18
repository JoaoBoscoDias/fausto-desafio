import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

/*
    * Firebase Component
    * @returns {object}
*/
import { db } from '../config/firebase';

/*
    * Firebase Component
    * @returns {object}
*/
import { collection, query, where, getDocs } from 'firebase/firestore';

/*
    * Styles Component
    * @returns {object}
*/
import styles from '../utils/styles';
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

/*
    * Functional Component
    * @returns {JSX}
*/
const BuscarFruta = () => {

    /*
        * States Component
        * @returns {object}
    */
    const [getNameFruit, setNameFruit] = useState('');
    const [getFruit, setFruit] = useState([]);
    
    /*
        * Query Fruits
        * @returns {name}
    */
    async function queryFruit(name = null) {
        try{
            const queryList = query(collection(db, 'frutas'), where('nomeDaFruta', '==', name));
            const queryResult = await getDocs(queryList);
            
            const fruit = [];
            queryResult.forEach((doc) => {
                fruit.push(doc.data());
            });

            setFruit(fruit);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryFruit(getNameFruit);
    }, [getNameFruit]);

    /*
        * Return Component
        * @returns {JSX} - BuscarFruta
    */
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text style={[styles.bold, {marginBottom: '5px'}]}>Nome(s):</Text>
                <View style={styles.modalContent}>
                    <FlatList data={[
                        {name: '• Banana'},
                        {name: '• Kiwi'},
                        ]} renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                    />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Insira um nome listado a cima:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Fruta' value={getNameFruit} onChangeText={setNameFruit} />
            </View>
            <View style={styles.content}>
                <FlatList data={getFruit} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nomeDaFruta}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};

/*
    * Exporting Component
    * @returns {JSX}
*/
export default BuscarFruta;