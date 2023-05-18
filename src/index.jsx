/*
    * Screen's Component
    * @returns {JSX}
*/
import HomeScreen from './screens/HomeScreen';
import BuscarAnimal from './screens/BuscarAnimal';
import BuscarProduto from './screens/BuscarProduto';
import BuscarFruta from './screens/BuscarFruta';
import BuscarPessoa from './screens/BuscarPessoa';
import BuscarCarro from './screens/BuscarCarro';
import BuscarCor from './screens/BuscarCor';

/*
    * React Navigation Component
    * @returns {JSX}
*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/*
    * Stack Component
    * @returns {JSX}
*/
const Stack = createStackNavigator();

/*
    * RootNavigation Component
    * @returns {JSX}
*/
export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: true}} />
                <Stack.Screen name='Buscar Animal' component={BuscarAnimal} options={{headerShown: true}} />
                <Stack.Screen name='Buscar Produto' component={BuscarProduto} options={{headerShown: true}} />
                <Stack.Screen name='Buscar Fruta' component={BuscarFruta} options={{headerShown: true}} />
                <Stack.Screen name='Buscar Pessoa' component={BuscarPessoa} options={{headerShown: true}} />
                <Stack.Screen name='Buscar Carro' component={BuscarCarro} options={{headerShown: true}} />
                <Stack.Screen name='Buscar Cor' component={BuscarCor} options={{headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};