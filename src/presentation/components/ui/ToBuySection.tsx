import { Button, Layout, Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import { MealByIdEntity } from '../../../domain/entities/mealEntity';
import { Icons } from './Icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/Navigator';

interface Props {
    dessert: MealByIdEntity

}
const ToBuySection = ({ dessert }: Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()


    return (
        <Layout style={styles.container}>
            <Layout>
                <Text category='h5' style={styles.priceTitle}>Price:</Text>
                <Text category='s1' style={styles.price}>{dessert?.priceStr!}</Text>
            </Layout>
            <Layout>
                <Button 
                onPress={()=> {
                    navigation.removeListener('focus', () => {})
                    navigation.navigate('ToBuyScreen', {dessert: dessert})
                }}
                style={styles.button}
                accessoryLeft={() => <Icons name='cart-outline' size={20} color='white'/>}
                >
                    Buy Now
                </Button>
            </Layout>
        </Layout>
    )
}
export default ToBuySection

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 30, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    priceTitle:{
        marginBottom: 5,
        color: '#464646',
    },
    price:{
        color: '#FF0000',
        fontSize: 18,
        fontStyle: 'italic',
    },
    button:{
        borderRadius:20,

    }

})