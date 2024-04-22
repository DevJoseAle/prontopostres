import { Avatar, Divider, Layout, Text, TopNavigation, TopNavigationAction } from "@ui-kitten/components"
import { PropsWithChildren, useCallback } from "react"
import { Icons } from "../components/ui/Icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Image } from 'react-native';


interface Props extends PropsWithChildren{
    title: string;
    subtitle?: string;
    icon?: string;
    action?: () => void
}
const MainLayout = ({
    title,
    subtitle,
    icon,
    action,
    children
}: Props) => {
    
    const {navigate, canGoBack} = useNavigation();
    const insets = useSafeAreaInsets();
    const renderIcon = useCallback(() => 
    <TopNavigationAction
        icon={() => {
        return <Icons name={'arrow-back'} size={20} />}
    }
        onPress={action}
     />, [icon])

  return (
    <Layout>
        <TopNavigation 
        style={{
            marginTop: insets.top, 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            alignContent: 'center',
            backgroundColor: "#FED9D7", 
            
        }}
        title={ 'Pronto' }
        subtitle={ 'Postres' }
        alignment="center"
        accessoryLeft={ canGoBack() ? renderIcon : undefined }
        accessoryRight={()=> <Avatar size="large" source={require('../../assets/logo1.png')} />
     }
    
        />
        
        <Divider />

        <Layout style={{ height: '100%' }}>
            {children}
        </Layout>
    </Layout>
  )
}
export default MainLayout

