
import { Layout, Text, Divider, Avatar, Button } from '@ui-kitten/components';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { LeftIcon } from './LeftIcon';
import { Icons } from './Icons';
import { RootStackParams } from '../../navigator/Navigator';


const CustomHeader = () => {

    const { top } = useSafeAreaInsets();
    const route = useRoute().name;
    const { canGoBack, navigate, goBack } = useNavigation<NavigationProp<RootStackParams>>()
    return (
        <Layout style={[styles.container, { marginTop: top }]}>
            <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    canGoBack() && <LeftIcon />
                }
                <View style={styles.logoContainer}>
                    <Avatar size="large" source={require('../../../assets/logo1.png')} />
                    <View>
                        <Text style={styles.title}>Pronto</Text>
                        <Text style={styles.subtitle}> Postres</Text>
                    </View>
                </View>
            </Layout>
            <Layout>
                {
                    route !== 'OrdersScreen' && <Button
                        onPress={() => navigate('OrdersScreen')} appearance='ghost'>
                        My Orders
                    </Button>

                }
            </Layout>
        </Layout>
    )
}
export default CustomHeader


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 60,
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    subtitle: {
        fontSize: 14,

    },
    cart: {
        marginRight: 5,
        marginTop: -10
    },
    badgeCart: {
        position: 'relative',
        backgroundColor: 'red',
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        top: 15,
        left: 20,

    }
})