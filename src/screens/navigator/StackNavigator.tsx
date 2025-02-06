import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreens } from '../LoginScreens';
import { PRIMARY_COLOR } from '../../theme/commons/constants';
import { RegisterScreen } from '../RegisterScreen';
import { useState } from 'react';
//Definir interface estructura de mis obejtos usuarios
export interface User {
    id: number,
    name: string,
    email: string,
    password: string
}
//Definir arreglo con usuarios de prueba
const users: User[] = [
    { id: 1, name: 'Alisson Guapulema', email: 'alissong@gmail.com', password: '20061502' },
    { id: 2, name: 'Noemi Sandoval', email: 'nohemi@gmail.com', password: '123' }
]
const Stack = createStackNavigator();

export const StackNavigator = () => {
    //Función para agregar usuarios al arreglo
    const addUsers=(user: User): void =>{
        //Agregar nuevos usuarios al usersManager
        setUsersManager([...usersManager, user])
    }
    //hook useState: permite controlar el estado de los usuarios 
    const [usersManager, setUsersManager] = useState<User[]>(users)
    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR
            }
        }}>
            <Stack.Screen name="Login"
                options={{ headerShown: false }}
                children={()=><LoginScreens users ={usersManager}/>} />
            <Stack.Screen name="Register"
                options={{ headerShown: false }}
                children={()=><RegisterScreen users ={usersManager} addUsers={addUsers}/>} />
        </Stack.Navigator>
    );
}

