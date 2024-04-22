import { Layout, Text } from '@ui-kitten/components'
import { useEffect, useState } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { getMealsById } from '../../../actions/meal/getMealByID';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/Navigator';
import { MealByIdEntity } from '../../../domain/entities/mealEntity';
import LoadingScreen from '../loader/LoadingScreen';
import { DescriptionSection } from '../../components/ui/DescriptionSection';

import ToBuySection from '../../components/ui/ToBuySection';



interface Props extends StackScreenProps<RootStackParams, 'DessertScreen'> { }


export const DessertScreen = ({ route }: Props) => {

  const { dessertId } = route.params;
  let price;
  const [isLoading, setIsLoading] = useState(false);
  const [dessert, setDessert] = useState<MealByIdEntity>();
  useEffect(() => {

    async function firstCall() {
      setIsLoading(true)
      setDessert(await getMealsById(dessertId))
      setIsLoading(false)

    };
    firstCall();
  }, []);

  if (isLoading) return <LoadingScreen />

  return (

    <Layout style={styles.screen}>
      <Layout style={{ marginVertical: 14, alignItems: 'center' }}>
        <Text category='h4' style={{ textTransform: 'capitalize', textAlign: 'center', color: '#464646' }}>{dessert?.name}</Text>
        <Layout style={{ flexDirection: 'row' }}>
          <Text category='h6' style={{ textTransform: 'capitalize', color: '#FF6464' }}>category: </Text>
          <Text category='h6' style={{ textTransform: 'capitalize', color: '#464646' }}>{dessert?.category}</Text>

        </Layout >
      </Layout>
      <Image
        source={{ uri: dessert?.image }}
        style={{ width: '100%', height: 300, borderRadius: 20 }}
      />
      <DescriptionSection dessert={dessert!} />

      <ToBuySection dessert={dessert!} />
    </Layout>

  )
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})

