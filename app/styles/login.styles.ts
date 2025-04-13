import { StyleSheet } from 'react-native';

const styleLogin = StyleSheet.create({
    container: {
        flex: 0.5,
        padding: 16,
        marginTop: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: "lightgray",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        width: '80%',
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    subtext: {
        color: 'lightgray',
        fontSize: 12,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "black",
        color: "white",
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center'
    }
})

export default styleLogin;