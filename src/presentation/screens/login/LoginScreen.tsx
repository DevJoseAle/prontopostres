import { Button, Input, Layout, Text, useTheme } from '@ui-kitten/components'
import { View, ScrollView, useWindowDimensions, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import LoginLogo from '../../components/ui/LoginLogo';
import { Icons } from '../../components/ui/Icons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/Navigator';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, loginUser } from '../../../redux/features/authSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { useFormik } from 'formik';
import { BuyFormSchema, LoginSchema } from '../../utils/validationSchemas';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> { }

const LoginScreen = ({ navigation }: Props) => {
  const status = useSelector((state: { auth: AuthState }) => state.auth.status)
  const dispatch = useAppDispatch()
  const [hasError, setHasError] = useState(false)
  const { values, isSubmitting, setFieldValue, handleSubmit, errors, resetForm, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    async onSubmit(values) {
      const resp = await dispatch(loginUser({ email: values.email, password: values.password }));
      if(resp.payload){
         setHasError(true)
        setTimeout(() => {
          setHasError(false)
        }, 5000);
      }
      console.log('Desde OnSubmit', resp.payload)
    },
  })

  useEffect(() => {
    if (status === 'authenticated') {
      navigation.replace('HomeScreen')
    }

  }, [status])

  const { height, width } = useWindowDimensions();
  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <ScrollView style={{ width: width * 0.8, marginTop: height * 0.15 }} >
          <LoginLogo />
          <Layout style={{ paddingTop: 10 }}>
            <Text category='h1' >Login</Text>
            <Text category='s2'>Ingresar Usuario y Contraseña</Text>
          </Layout>

          <Layout style={{ marginTop: 20 }}>
            <Input
              accessoryLeft={() => <Icons name='mail-outline' size={20} />}
              style={{ borderRadius: 20, marginBottom: 5 }}
              placeholder='Email'
              keyboardType='email-address'
              autoCapitalize='none'
              size='medium'
              value={values.email}
              onChangeText={text => setFieldValue('email', text)}
            />
            {errors.email && touched.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
            <Input
              accessoryLeft={() => <Icons name='key-outline' size={20} />}
              style={{ borderRadius: 20, marginBottom: 5 }}
              placeholder='Contraseña'
              keyboardType='default'
              secureTextEntry
              autoCapitalize='none'
              size='medium'
              value={values.password}
              onChangeText={text => setFieldValue('password', text)}

            />
            {errors.password && touched.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
            <View style={{ height: 20 }} />

            <Layout>
              <Button

                status='danger'
                accessoryRight={() => <Icons name='chevron-forward-outline' size={20} />}
                onPress={() => {
                  handleSubmit()
                }}
                appearance='outline'
                style={{ borderRadius: 20 }}
              >
                Ingresar
              </Button>
              {
                hasError ? <Text style={styles.errorMsg}>Usuario o contraseña incorrectos</Text> : null
              }
            </Layout>
          </Layout>
        </ScrollView >
      </KeyboardAvoidingView>
      
    </Layout>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  errorMsg:{
    marginTop: 10,
    color: 'red',
    justifyContent: 'center',
    alignSelf: 'center',
  }
})