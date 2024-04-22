
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/homescreen/HomeScreen';
import LoginScreen from '../screens/login/LoginScreen';
import { DessertScreen } from '../screens/dessert/DessertScreen';
import CustomHeader from '../components/ui/CustomHeader';
import ToBuyScreen from '../screens/toBuy/ToBuyScreen';
import { MealByIdEntity } from '../../domain/entities/mealEntity';
import OrdersScreen from '../screens/orders/OrdersScreen';


export type RootStackParams = {

  HomeScreen: undefined;
  LoginScreen: undefined;
  OrdersScreen: undefined;
  ToBuyScreen: { dessert: MealByIdEntity };
  DessertScreen: { dessertId: string };
}
const Stack = createStackNavigator<RootStackParams>();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName='LoginScreen'
      screenOptions={{
        header: () => <CustomHeader />,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DessertScreen" component={DessertScreen} />
      <Stack.Screen name="ToBuyScreen" component={ToBuyScreen} options={{
        headerShown: false,
        presentation: 'modal'
      }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />

    </Stack.Navigator>
  );
}

export default AppStack;
