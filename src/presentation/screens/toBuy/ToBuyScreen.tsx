import { Layout, ListItem } from '@ui-kitten/components';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RootStackParams } from '../../navigator/Navigator';
import { StackScreenProps } from '@react-navigation/stack';
import IngredientList from '../../components/ui/IngredientList';


interface Props extends StackScreenProps<RootStackParams, 'ToBuyScreen'> {}
const ToBuyScreen = ({route}: Props) => {

    const meal = route.params.dessert

    const ingredients: string[] = [];
    const measures: string[] = [];
  
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `ingredient${i}`;
      const measureKey = `measure${i}`;

      if (meal[ingredientKey] && meal[ingredientKey] !== "") {
        ingredients.push(meal[ingredientKey] as string);
      }
      if (meal[measureKey] && meal[measureKey] !== "") {
        measures.push(meal[measureKey] as string);
      }
      if (!meal[ingredientKey] && !meal[measureKey]) {
        break;
      }
    }
  
    
  return (
    <>  
        <Layout style={styles.topBar}/>
        <Layout style={styles.screen}>
            <IngredientList meal={meal}ingredients={ingredients} measures={measures} />

        </Layout>
    </>
  )
}
export default ToBuyScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  },
  topBar:{
    height: 5,
    width:70,
    borderRadius: 35,
    alignSelf: 'center',
    backgroundColor: '#000000',
  }
})