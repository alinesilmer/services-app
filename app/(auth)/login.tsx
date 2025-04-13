import { View, Text, TextInput, Button} from 'react-native';
import { Stack } from 'expo-router';
import styleLogin from '../styles/login.styles';

const Login = () => {
    return (
        <View style={styleLogin.container}>
            <Text style={styleLogin.title}>Inicio</Text>
            <Text style={styleLogin.subtext}>Bienvenido. Ingrese para continuar</Text>
            <Text style={styleLogin.text}> Usuario </Text>
            <TextInput style={styleLogin.input} placeholder="Usuario" />
            <Text style={styleLogin.text}>Contraseña </Text>
            <TextInput style={styleLogin.input} placeholder="Contraseña" />
            {/* <Button style={styleLogin.button} title="Iniciar Sesión" onPress={() => {}} /> */}
        </View>
    );

}

export default Login;