import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents'
import { BodyComponents } from '../components/BodyComponents'
import { PRIMARY_COLOR } from '../theme/commons/constants'
import { styles } from '../theme/appTheme'
import { InputComponent } from '../components/InputComponent'


export const LoginScreens = () => {
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR}/>
            <TitleComponents title='Iniciar Sesión'/>
            <BodyComponents>
                <Text style={styles.titlePrincipal}>Bienvenido de nuevo</Text>
                <Text>Realiza tus compras de manera rápida y segura</Text>
                <InputComponent placeholder='Correo' keyboardType='email-address'/>
                <InputComponent placeholder='Contraseña' keyboardType='default'/>
            </BodyComponents>
        </View>
    )
}
