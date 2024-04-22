import { Text } from '@ui-kitten/components'
import { View, Image } from 'react-native'
const LoginLogo = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
      <Image
      accessible 
      accessibilityLabel='logo'
      style={{width: 150, height: 150}}
      source={require('../../../assets/logo1.png')}
      />

      <Text
      category='h1'
      style={{fontStyle: 'italic'}}
      >
        Pronto
      </Text>

      <Text 
      style={{fontStyle: 'italic', color: 'red'}}
      category='h6'>
        Postres
      </Text>
    </View>
  )
}
export default LoginLogo