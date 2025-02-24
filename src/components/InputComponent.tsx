import React from 'react'
import { KeyboardTypeOptions, TextInput } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    placeholder: string,
    keyboardType: KeyboardTypeOptions;
    handleChange: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;
}

export const InputComponent = ({ placeholder, keyboardType , handleChange, name, isPassword=false}: Props) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChange(name, value)}
            secureTextEntry={isPassword}
            style={styles.inputText}>
        </TextInput>


    )
}
