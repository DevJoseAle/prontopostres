
import { Layout, Spinner, Text  } from '@ui-kitten/components'
import { StyleSheet, View } from 'react-native';

const LoadingScreen = () => {
  return (
    <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.controlSpinner}>

            <Spinner 
            size='giant' 
            status='control'
            
            />
        </View>
      <Text style={styles.text}>Cargando...</Text>
    </Layout>
  )
}
export default LoadingScreen

const styles = StyleSheet.create({

    controlSpinner: {
      borderRadius: 4,
      padding: 12,
      marginBottom:10,
      backgroundColor: 'red',
      alignItems: 'center',
    },
    text:{
        fontSize: 18,
        fontStyle: 'italic',
    }
  });
  