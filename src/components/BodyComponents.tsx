import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const BodyComponents = (props : any) => {
    //hook useWindowsDimensions
    const { height } = useWindowDimensions();
    return (
        <View style={{...styles.body,
            height: height * 0.88
        }}>
            {props.children}
        </View>
    )
}
