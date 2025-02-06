import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from './commons/constants';
export const styles = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        paddingHorizontal: 35,
        fontWeight: 'bold',
        paddingVertical: 30,
    },
    body: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 35,
        paddingTop: 40,
        paddingHorizontal: 35,
    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
        alignSelf: 'center'
    },
    titleDescrption: {
        fontSize: 15,
        color: TERTIARY_COLOR,
        marginTop: 7
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        width: '95%',
        borderRadius: 10,
        margin: 5,
        elevation: 3,
    },
    containerForm: {
        marginVertical: 20
    },
    buttomForm: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10,
        elevation: 2,
        width: '95%',
        margin: 5

    },
    iconPass: {
        position: 'absolute',
        right: 20,
        top: 65,
        bottom: 0,
        color: 'black'
    },
    register:{
        alignSelf: 'center',
        color: PRIMARY_COLOR,
        fontWeight: 'condensed',
        margin:5,
    },
    sub:{
        textDecorationLine:'underline'
    }


})