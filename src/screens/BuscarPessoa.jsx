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
const BuscarPessoa = () => {

    /*
        * States Component
        * @returns {object}
    */
    const [getNamePerson, setNamePerson] = useState('');
    const [getPerson, setPerson] = useState([]);
    
    /*
        * Query Persons
        * @returns {name}
    */
    async function queryPerson(name = null) {
        try{
            const queryList = query(collection(db, 'pessoa'), where('nomeDaPessoa', '==', name));
            const queryResult = await getDocs(queryList);
            
            const person = [];
            queryResult.forEach((doc) => {
                person.push(doc.data());
            });

            setPerson(person);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryPerson(getNamePerson);
    }, [getNamePerson]);

    /*
        * Return Component
        * @returns {JSX} - BuscarPessoa
    */
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <Text style={[styles.bold, {marginBottom: '5px'}]}>Nome(s):</Text>
                <View style={styles.modalContent}>
                    <FlatList data={[
                        {name: '• Gustavo'},
                        {name: '• Jair M. Bolsonaro'},
                        ]} renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                    />
                </View>
            </View>
            <View style={styles.content}>
                <Text style={[styles.title, styles.bold]}>Insira um nome listado a cima:</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome da Pessoa' value={getNamePerson} onChangeText={setNamePerson} />
            </View>
            <View style={styles.content}>
                <FlatList data={getPerson} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nomeDaPessoa}</Text>
                        <Text style={styles.bold}>Idade: {item.idadeDaPessoa}</Text>
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
export default BuscarPessoa;