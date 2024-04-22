import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Button, Divider, Input, InputProps, Layout, ListItem, Text, ViewPager } from '@ui-kitten/components'
import { Formik, useFormik } from 'formik'
import { useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { BuyFormSchema } from '../../utils/validationSchemas';
import { RootStackParams } from '../../navigator/Navigator'
import { MealByIdEntity } from '../../../domain/entities/mealEntity'
import { useAppDispatch } from '../../../redux/hooks'
import { createOrder } from '../../../redux/features/orderSlice'
import { OrderMapper } from '../../../infrastructure/mappers/order.mapper'

interface Props{
    ingredients: string[]
    measures: string[]
    meal: MealByIdEntity
}
const IngredientList = ({ ingredients, measures, meal }: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState(false);
    const dispatch = useAppDispatch()

    const { values, isSubmitting, setFieldValue, handleSubmit, errors, resetForm, touched} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address1: '',
            city: '',
            zipCode: '',
            phoneNumber: ''
        },
        validationSchema:BuyFormSchema,
        onSubmit(values, formikHelpers) {
            setActive(isSubmitting)
            setTimeout(() => {
                dispatch(createOrder(OrderMapper.mapToOrder(meal, values)))
                navigation.navigate('HomeScreen')
                setActive(false)
            }, 2000);
        },
    })

    return (
        <> 
        <KeyboardAvoidingView 
             style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 130 : 0}>
            <ViewPager
                selectedIndex={index}

                style={styles.pager}>

                <Layout
                    level='1'
                >
                    <Text category='h2' style={styles.title}>Ingredients</Text>
                    <Text category='p2' style={styles.subtitle}>These are the ingredients we will send you for the preparation of your dessert. </Text>
                    <Text category='p2' style={styles.subtitle2}>You need to scroll to see the complete list. </Text>

                    <ScrollView style={styles.container}>
                        {
                            ingredients.map((ingredient, index) => (
                                <Layout key={index}>
                                    <ListItem
                                        
                                        disabled
                                        title={ingredient}
                                        description={measures[index]}
                                        onPress={() => null} />
                                    <Divider />

                                </Layout>

                            ))
                        }
                    </ScrollView>
                </Layout>
                <Layout
                    level='1'
                > 
                <ScrollView>
                    
                         
                    <Text category='h2' style={styles.title}>Address: </Text>
                    <Text category='p2' style={styles.subtitle}>To complete your purchase, you must enter your details in the following form. </Text>
                    <Text category='p2' style={styles.subtitle2}>Don't forget to verify your address so we can deliver the ingredients to you. </Text>
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='First Name'
                        value={values.firstName}
                        onChangeText={text => setFieldValue('firstName', text)}
                    />
                    {errors.firstName && touched.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text>: null}
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='Last Name'
                        value={values.lastName}
                        onChangeText={text => setFieldValue('lastName', text)}
                    />
                    {errors.lastName && touched.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='Address 1'
                        value={values.address1}
                        onChangeText={text => setFieldValue('address1', text)}
                    />  
                    {errors.address1 && touched.address1 && <Text style={styles.errorText}>{errors.address1}</Text>}
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='City'
                        value={values.city}
                        onChangeText={text => setFieldValue('city', text)}
                    /> 
                    {errors.city && touched.city && <Text style={styles.errorText}>{errors.city}</Text>}
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='Phone Number'
                        keyboardType='phone-pad'
                        value={values.phoneNumber}
                        onChangeText={text => setFieldValue('phoneNumber', text)}
                    /> 
                    {errors.phoneNumber && touched.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}
                    <Input
                        style={styles.input}
                        size='medium'
                        placeholder='Zip Code'
                        keyboardType='phone-pad'
                        value={values.zipCode}
                        onChangeText={text => setFieldValue('zipCode', text)}
                    />
                    {errors.zipCode && touched.zipCode && <Text style={styles.errorText}>{errors.zipCode}</Text>}
                      
                    <Divider />
                    </ScrollView>

                </Layout>
            </ViewPager>
            <Layout style={styles.buttonContainer}>

                {index === 0
                    ?
                    <>
                        <Button appearance='filled' style={[styles.button, { justifyContent: 'flex-start' }]} onPress={() => navigation.goBack()}>Exit</Button >
                        <Button appearance='filled' style={[styles.button, { justifyContent: 'flex-end' }]} onPress={() => setIndex(index + 1)}>Next</Button >
                    </>
                    :
                    <>
                        <Button appearance='filled' style={[styles.button, { justifyContent: 'flex-start' }]} onPress={() => {Keyboard.dismiss(),resetForm(),setIndex(index - 1)}}>Back</Button >
                        <Button appearance='filled' disabled={active} style={[styles.button, { justifyContent: 'flex-end' }]} onPress={() => {Keyboard.dismiss(), handleSubmit()}}>Buy Now!</Button >
                    </>
                }
            </Layout>
        </KeyboardAvoidingView>
        </>
    )
}
export default IngredientList

const styles = StyleSheet.create({
    pager: {

    },
    container: {
        height: '75%'
    },
    title: {
        alignSelf: 'center',
        color: '#464646',
        fontSize: 20,
        marginTop: 10
    },
    subtitle: {
        paddingHorizontal: 10,
        color: '#464646',
        marginTop: 5,
        textAlign: 'center',
        fontStyle: 'italic',

    },
    subtitle2: {
        paddingHorizontal: 10,
        color: '#FF0000',
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 8,

    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        borderRadius: 20,
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 10
    }, 
    errorText:{
        color: 'red',
        justifyContent: 'center',
        alignSelf: 'center',

    }
})