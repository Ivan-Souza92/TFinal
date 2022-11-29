import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import React, { useState } from "react";
import { database } from "../../config/firebase.config";


const AddPacote = ({ navigation }) => {

    const [description, setDescription] = useState(null);
    const [diaria, setDiaria] = useState(null);
    const [hotel, setHotel] = useState(null);
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState(null);
    const [title, setTitle] = useState(null);

    const add = () => {

        database.collection('pacote').add({
            description: description,
            diaria: diaria,
            hotel: hotel,
            image: image,
            price: price,
            title: title
        })

        navigation.navigate("Home");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
                style={styles.input}
                placeholder="Breve Texto"
                onChangeText={setDescription}
                value={description}
            />
            <TextInput
                style={styles.input}
                placeholder="Ex: 2"
                onChangeText={setDiaria}
                value={diaria}
            />
            <TextInput
                style={styles.input}
                placeholder="Insira uma URL da imagem do hotel"
                onChangeText={setHotel}
                value={hotel}
            />
            <TextInput
                style={styles.input}
                placeholder="Insira uma URL da imagem da cidade"
                onChangeText={setImage}
                value={image}
            />
            <TextInput
                style={styles.input}
                placeholder="Preço"
                onChangeText={setPrice}
                value={price}
            />
            <TextInput
                style={styles.input}
                placeholder="Titulo"
                onChangeText={setTitle}
                value={title}
            />
            <TouchableOpacity
                style={styles.buttonNewPacote}
                onPress={() => {
                    add()
                }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    label: {
        width: "90%",
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color: "#F92E6A"
    },
    input: {
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#F92E6A",
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonNewPacote: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
    }

});



export default AddPacote