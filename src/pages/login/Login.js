import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Stack, TextInput, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';


const Login = ({ navigation }) => {

    const [hidePass, setHidePass] = useState(true)
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const enterLogin = async () => {

        await signInWithEmailAndPassword(auth, email, password).then(value => {
            alert('Seja Bem-Vindo!');
            navigation.navigate('Home')
        }).catch(value => {
            alert('Erro ao logar, verifique as credências inseridas!');
        })
    }


    return (

        <View style={styles.container}>
            <View style={styles.UserImage}>
                <Image source={require('../../../assets/user-blue.png')} style={styles.Image} />
            </View>
            <View>
                <TextInput
                    placeholder="Email"
                    style={{ width: 280 }}
                    value={email}
                    leading={props => <Icon name="account" {...props} />}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="Senha"
                    style={{ marginTop: 30 }}
                    evariant="outlined"
                    secureTextEntry={hidePass}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    trailing={props => (
                        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} onPress={() => setHidePass(!hidePass)} />
                    )}

                />
            </View>
            <View style={{ marginTop: 25 }}>
                <Button title="Entrar" style={{ height: 40 }} onPress={() => enterLogin()} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')} >
                <Text style={styles.ButtonCreate} >Ainda não possui uma conta</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Login