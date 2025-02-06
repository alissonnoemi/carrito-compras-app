import React from 'react'
import { Text, useWindowDimensions } from 'react-native'
import { styles } from '../theme/appTheme';


//Definir la interfaz de los props
interface Props {
    title: string;
    
}
export const TitleComponents = ({ title}: Props) => {
    const {height} = useWindowDimensions ();
    return (
        <Text style={{...styles.title,
            height: height *0.12
        }}>{title}</Text>
    )
}
