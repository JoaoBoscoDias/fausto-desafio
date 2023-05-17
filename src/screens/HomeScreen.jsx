import { useState, useEffect } from 'react';
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
const HomeScreen = () => {

    /*
        * States Component
        * @returns {object}
    */
    const [getNameProduct, setNameProduct] = useState('');
    const [getProduct, setProduct] = useState([]);
    
    /*
        * Query Products
        * @returns {name}
    */
    async function queryProducts(name = null) {
        try{
            const ref = collection(db, 'produtos');
            const queryRef = query(ref, where('nomeDoProduto', '==', name));
            const querySnapshot = await getDocs(queryRef);
            
            const product = [];
            querySnapshot.forEach((doc) => {
                product.push(doc.data());
            });

            setProduct(product);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryProducts(getNameProduct);
    }, [getNameProduct]);

    /*
        * Return Component
        * @returns {JSX} - HomeScreen
    */
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Pesquise pelo nome do(s) produto(s)</Text>
            </View>
            <View style={styles.content}>
                <TextInput label='Nome do Produto' value={getNameProduct} onChangeText={setNameProduct} />
            </View>
            <View style={styles.content}>
                <FlatList data={getProduct} renderItem={({item}) => (
                    <View>
                        <Text style={styles.bold}>Nome: {item.nomeDoProduto}</Text>
                        <Text style={styles.bold}>Quantidade: {item.quantidadeDoProduto}</Text>
                        <Text style={styles.bold}>Preço: R${item.precoDoProduto.toLocaleString('en-PT')}</Text>
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
export default HomeScreen;