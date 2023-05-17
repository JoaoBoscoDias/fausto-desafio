/*
    * Screen's Component
    * @returns {JSX}
*/
import HomeScreen from './screens/HomeScreen';

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
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};