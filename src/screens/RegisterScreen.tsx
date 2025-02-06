import React, { useState } from 'react'
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponents } from '../components/BodyComponents';
import { TitleComponents } from '../components/TitleComponents';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { BuutonComponent } from '../components/BuutonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from './navigator/StackNavigator';
//Definir la interface para las propiedades
interface Props{
    users: User[];
    addUsers:(user:User)=>void;
}
//Definir interface
interface RegisterForm {
    name: string;
    Email: string;
    Password: string;
}

export const RegisterScreen = ({users, addUsers}: Props) => {
    //hook useState
    const [registerForm, setregisterForm] = useState<RegisterForm>({
        name: '',
        Email: '',
        Password: ''
    });
    //función para manejar la captura y cambio de los campos del formulario
    const handleChange = (name: string, value: string) => {
        //console.log(name, value)
        //Modificar la data del registerForm
        setregisterForm({
            ...registerForm,[name]:value
        });
    }
    //Funció ara validar si el usuario existe
    const verifyUser =()=>{
        const existUser = users.find(user => user.email ===registerForm.Email)
        return existUser;
    }
    //Función para registro
    const handleRegister=()=>{
        if(registerForm.name === ''|| registerForm.Email===''|| registerForm.Password===''){
            Alert.alert('Error', 'Todos los campos son obligatorios')
            return;
        }
        //validar si el usuario existe
        if(verifyUser()){
            Alert.alert('Error', 'Usario existente')
            return;
        }
        console.log(registerForm)
    }
    //hook de navegación
    const navigation = useNavigation();
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponents title='Registrate' />
            <BodyComponents>
                <Text style={styles.titlePrincipal}>
                    Estas muy cerca
                </Text>
                <Text style={styles.titleDescrption}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <View style={styles.containerForm}>
                    <InputComponent
                        placeholder='Nombre'
                        keyboardType='numeric'
                        handleChange={handleChange}
                        name='name' />
                    <InputComponent
                        placeholder='Correo'
                        keyboardType='email-address'
                        handleChange={handleChange}
                        name='Email' />
                    <InputComponent
                        placeholder='Contraseña'
                        keyboardType='default'
                        handleChange={handleChange} name='Password' />
                </View>
                <BuutonComponent title='Registrar' handleSendInfor={handleRegister} />
                <TouchableOpacity style={styles.register} onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.sub}>¿Ya tienes una cuenta? Inicia Sesión aquí</Text>
                </TouchableOpacity>
            </BodyComponents>

        </View>
    )
}
