import { View, Image, StyleSheet } from 'react-native'
import { MealCardEntity } from '../../../domain/entities/mealEntity';
import { currencyFormatter } from '../../utils/formatter';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import { Icons } from './Icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigator/Navigator';
import { useCallback } from 'react';


interface Props{
    meal: MealCardEntity
}
export const DessertCard = ({ meal }:Props) => {

  const {navigate} = useNavigation<NavigationProp<RootStackParams>>()
  const handlepress = useCallback(
    () => navigate('DessertScreen', {dessertId: meal.id}),
    [],
  )
  
  return (
     
         <Card
           onPress={ handlepress}
          key={meal.id}
          style={styles.cardStyle}
          >
            
          <Image style={{width: '100%', height: 150,borderRadius: 3 }} source={{ uri: meal.image }} />
          <View style={{width: '100%', justifyContent: 'flex-start', alignItems:'flex-start', flexDirection:'row' }} >
            <Layout>
              <Text category='h6' style={styles.title}>{meal.name}</Text>
              <Text style={styles.subtitle}> {currencyFormatter(meal.price)}</Text>

            </Layout>
        
          </View>
          <Layout>

            <Button
            onPress={ handlepress}
            style={styles.button}
            >
              <Text>Details</Text>
            </Button>

            </Layout>
        </Card>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,   
  },
  cardStyle: {
    flex:1,

    width: '98%',
    height: 240,
    borderRadius: 6,
    borderColor:'#FEB6B6C0',
    marginHorizontal: 5,
    marginVertical: 3,
  
  }, 
  title:{
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 5,
  },
  subtitle:{
    textAlign: 'left',
    fontSize: 15,
    marginVertical: 5,
    fontWeight: 'bold',
    color: '#E28065',
    fontStyle: 'italic',

  },
  button:{
    alignItems:'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'red',
    height: 30,
    borderRadius: 6,
    right: 5,
    bottom: -10
  
  }
})
