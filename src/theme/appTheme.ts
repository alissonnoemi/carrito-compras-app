import { StyleSheet } from "react-native";
import { INPUT_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './commons/constants';
export const styles = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        paddingHorizontal: 35,
        fontWeight: 'bold',
        paddingVertical: 30,
        
    },
    body:{
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 35,
        paddingTop: 40,
        paddingHorizontal: 35,
    },
    titlePrincipal:{
        fontSize: 17,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        alignSelf: 'center'
    },
    titleDescrption:{
        fontSize: 15,
        color: TERTIARY_COLOR
    },
    inputText:{
        backgroundColor: INPUT_COLOR,
        width: '95%',
        borderRadius: 10,
        margin: 5
    },
    
})