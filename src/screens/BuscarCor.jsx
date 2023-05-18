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
const BuscarCor = () => {

    /*
        * States Component
        * @returns {object}
    */
    const [getNameColor, setNameColor] = useState('');
    const [getColor, setColor] = useState([]);
    
    /*
        * Query Colors
        * @returns {name}
    */
    async function queryColor(name = null) {
        try{
            const queryList = query(collection(db, 'cores'), where('nomeDaCor', '==', name));
            const queryResult = await getDocs(queryList);
            
            const color = [];
            queryResult.forEach((doc) => {
                color.push(doc.data());
            });

            setColor(color);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryColor(getNameColor);
    }, [getNameColor]);

    /*
        * Return Component
        * @returns {JSX} - BuscarCor
    */
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text style={[styles.bold, {marginBottom: '5px'}]}>Nome(s):</Text>
                <View style={styles.modalContent}>
                    <FlatList data={[
                        {name: '• Amarelo'},
                        {name: '• Verde'},
                        ]} renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                    />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Insira um nome listado a cima:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Cor' value={getNameColor} onChangeText={setNameColor} />
            </View>
            <View style={styles.content}>
                <FlatList data={getColor} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nomeDaCor}</Text>
                        <Text style={[styles.bold, {backgroundColor: item.hexDaCor, padding: 0}]}>HEX: {item.hexDaCor}</Text>
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
export default BuscarCor;