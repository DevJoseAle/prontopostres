import { Divider, Layout, List, ListItem, Text } from '@ui-kitten/components'
import { useEffect, useState } from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { StorageAdapter } from '../../../config/adapters/storage-adapter';
import { OrderEntity } from '../../../domain/entities/orderEntity';
import LoadingScreen from '../loader/LoadingScreen';
import { FlatList } from 'react-native';

const OrdersScreen = () => {

    const [orders, setOrders] = useState<OrderEntity[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        async function firstCall() {
            setIsLoading(true)
            const items = await StorageAdapter.getItem('orders')
            setOrders(JSON.parse(items!))
            setIsLoading(false)
        };
        firstCall();



    }, []);
    if (isLoading) return <LoadingScreen />
    
    return (
        
        <Layout style={styles.screen}>
            <Text category='h5' style={styles.title}>Orders:</Text>
            {
                orders === null
                ? <Text>No hay pedidos</Text> 
                : <FlatList
                data={orders}
                renderItem={({ item, index }) => (
                    <OrderItem item={item} />
                )} />
            }
            <Layout style={{ height: 60 }}/>
        </Layout>
    )

}
export default OrdersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 10,
    },
    title: {
        textAlign: 'center',
        color: '#464646',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    item: {
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#D1D1D1',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        height: 150,
        marginBottom: 5,
        borderRadius: 10

    },
    imagen: {
        width: 80,
        height: 80
    }
})

const OrderItem = ({ item }: { item: OrderEntity }) => {
    return (
        <Layout style={styles.item}>
            <Layout style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 5 }}>
                <Text category='s1'>{item.dessert.name}</Text>
                <Text category='s1' style={{ color: '#FF6464', marginTop: 5 }}>{item.dessert.priceStr}</Text>
            </Layout>
            <Layout style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: '80%', marginTop: 6, paddingHorizontal: 15 }}>
                <Layout>
                    <Image style={styles.imagen} source={{ uri: item.dessert.image }} />
                </Layout>


                <Layout style={{ flexDirection: 'column', justifyContent: 'space-evenly', marginLeft:5, paddingHorizontal:20}}>
                    <Layout>
                        <Layout>
                            <Text category='label'>Client Name:</Text>
                            <Text>{item.clientData.firstName} </Text>
                        </Layout>
                    </Layout>

                    <Layout>
                        <Text category='label'>Direccion</Text>
                        <Text>{item.clientData.address1}</Text>
                    </Layout>
                </Layout>
                <Layout style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
                    <Layout>
                        <Layout>
                            <Text category='label'>Phone number:</Text>
                            <Text>{item.clientData.phoneNumber}</Text>
                        </Layout>
                    </Layout>

                    <Layout style={{justifyContent:'flex-start'}}>
                        <Text category='label' >City</Text>
                        <Text>{item.clientData.city}</Text>
                    </Layout>
                </Layout>

            </Layout>
        </Layout>
    )
}