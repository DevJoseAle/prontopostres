
import { useTheme } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props {
    name: string;
    size: number;
    color?: string;
}
export const Icons = ({name, size, color}: Props) => {

  const theme = useTheme()
  color = color ? color : theme['color-primary-700']
  return <Icon name={name} size={size} color={color} />;
}

