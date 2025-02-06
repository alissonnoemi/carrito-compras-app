import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { TitleComponents } from '../components/TitleComponents'
import { BodyComponents } from '../components/BodyComponents'
import { PRIMARY_COLOR } from '../theme/commons/constants'
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent'
import { BuutonComponent } from '../components/BuutonComponent'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native'

interface LoginForm {
    Email: string,
    Password: string
}
//Definir interface estructura de mis obejtos usuarios
interface User {
    id: number,
    name: string,
    email: string,
    password: string
}
//Definir arreglo con usuarios de prueba
const users: User []=[
    {id: 1, name: 'Alisson Guapulema', email:'alissong@gmail.com', password: '20061502'},
    {id: 2, name: 'Noemi Sandoval', email:'nohemi@gmail.com', password: '123'}
]
export const LoginScreens = () => {
    const [loginForm, setLoginForm] = useState<LoginForm>({
        Email: '',
        Password: ''
    })
    //hook useState: permite manejar el estado del password
    const [hiddenPasword, setHiddenPassword] = useState<boolean>(true)
    //hook useNavegation: permite navegar entre pantallas
    const navigation= useNavigation();

    //Función para menajr la captura y cambio de los campos del formulario
    const handleChange = (name: string, value: string): void => {
        //console.log(name, value);
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    }
    //Funcion para validar si existe el usuario en el arreglo users
    const verifyUser=() : User | undefined=>{
        const existUser=users.find(user=> user.email === loginForm.Email && user.password);
        return existUser;
    }
    //  Función para iniciar sesión
    const handleLogin = () => {
        //verificar si el formulario esta lleno
        if (loginForm.Email === '' || loginForm.Password === '') {
            Alert.alert('Error', 'Campos incompletos');
            return;
        }
        //verificar si el usuario existe
        if(!verifyUser()){
            Alert.alert('Error', 'Usuario y/o contraseña incorrecta')
            return;
        }

        //Verificar si se cambio el estado
        console.log(loginForm);
    }
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponents title='INICIAR SESIÓN' />
            <BodyComponents>
                <Text style={styles.titlePrincipal}>Bienvenido de nuevo</Text>
                <Text>Realiza tus compras de manera rápida y segura</Text>
                <View style={styles.containerForm}>
                    <InputComponent placeholder='Correo' keyboardType='email-address' handleChange={handleChange} name='Email' />
                    <InputComponent placeholder='Contraseña' keyboardType='default' isPassword={hiddenPasword} handleChange={handleChange} name='Password' />
                    <Icon
                        name={hiddenPasword ? 'visibility-off' : 'visibility'}
                        color={PRIMARY_COLOR}
                        size={20}
                        style={styles.iconPass}
                        onPress={() => setHiddenPassword(!hiddenPasword)}
                    />
                </View>
                <BuutonComponent title='Iniciar' handleSendInfor={handleLogin} />
                <TouchableOpacity style={styles.register} onPress={()=> navigation.dispatch(CommonActions.navigate({name:'Register'}))}>
                    <Text style={styles.sub}>¿No tienes una cuenta? Registrate Aquí</Text>
                </TouchableOpacity>
            </BodyComponents>
        </View>
    )
}
