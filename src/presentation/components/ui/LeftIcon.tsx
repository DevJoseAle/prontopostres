import { View, TouchableOpacity } from "react-native"
import { Icons } from "./Icons"
import { useNavigation } from "@react-navigation/native"

export const LeftIcon = () =>{
    const {goBack} = useNavigation()
    return(
        <View>
            <TouchableOpacity
            onPress={goBack}>
                <Icons name='chevron-back-outline' size={30} />
            </TouchableOpacity>
        </View>
    )
}