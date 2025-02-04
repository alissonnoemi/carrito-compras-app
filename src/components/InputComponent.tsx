import React from 'react'
import { KeyboardTypeOptions, TextInput} from 'react-native'
import { styles } from '../theme/appTheme'

interface Props{
    placeholder: string,
    keyboardType: KeyboardTypeOptions
}

export const InputComponent = ({placeholder, keyboardType} : Props) => {
    return (
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                style={styles.inputText}>
            </TextInput>
            

    )
}
