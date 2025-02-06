import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreens } from '../LoginScreens';
import { PRIMARY_COLOR } from '../../theme/commons/constants';
import { RegisterScreen } from '../RegisterScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle:{
                backgroundColor: PRIMARY_COLOR
            }
        }}>
            <Stack.Screen name="Login" 
            options={{headerShown: false}} 
            component={LoginScreens} />
            <Stack.Screen name="Register"
            options={{headerShown: false}}
            component={RegisterScreen}/>
        </Stack.Navigator>
    );
}

