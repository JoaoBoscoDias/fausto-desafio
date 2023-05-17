import { StyleSheet } from 'react-native';

/*
  * Styles Component
  * @returns {object}
*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 20,
    },
    content:{
      textAlign: 'center',
      margin: 5,
    },
    bold:{
      fontWeight: 'bold',
    }
  }
);

/*
  * Exporting Component
  * @returns {JSX}
*/
export default styles;