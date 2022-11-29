import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Stack, TextInput, IconButton, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import cadastroStyle from './CadastroStyle';
import { createUserWithEmailAndPassword, FirebaseAuthUserCollisionException } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { styles } from '../login/styles';




const Cadastrar = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [msg, setMsg] = useState('As senhas são diferentes!');
    const [hidePass, setHidePass] = useState(true)

    const createUser = async () => {

        await createUserWithEmailAndPassword(auth, email, senha).then(value => {
            alert('Usuário Cadastrado com Sucesso');
            navigation.navigate('Login')
        }).catch(value => {
            alert('Erro ao cadastrar, verifique as credências inseridas!');
        })
    }

    return (
        <View style={cadastroStyle.container}>
            <View style={styles.UserImage}>
                <Image source={require('../../../assets/images.png')} style={styles.Image} />
            </View>
            <View>
                <TextInput
                    placeholder="Email"
                    style={{ width: 280 }}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="Senha"
                    style={{ marginTop: 30 }}
                    evariant="outlined"
                    secureTextEntry={hidePass}
                    trailing={props => (
                        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} onPress={() => setHidePass(!hidePass)} />
                    )}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />
                <TextInput
                    placeholder="Confirme a Senha"
                    style={{ marginTop: 30 }}
                    evariant="outlined"
                    secureTextEntry={hidePass}
                    trailing={props => (
                        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} onPress={() => setHidePass(!hidePass)} />
                    )}
                    value={confSenha}
                    onChangeText={(text) => setConfSenha(text)}

                />


            </View>
            <View style={{ marginTop: 25 }}>
                <Button title="Cadastrar"
                    onPress={() => {
                        if (senha === confSenha && email != '' && senha != '') {
                            createUser();
                        } else {
                            alert(msg)
                        }
                    }} />
            </View>
        </View >
    )

}

export default Cadastrar