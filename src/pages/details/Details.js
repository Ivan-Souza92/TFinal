import React from "react"
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { styles } from "./styles";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Maps from "../../components/Maps";



const Details = (props) => {

    const navigation = useNavigation();
    const destino = props.route.params.destino;
    const imagem = props.route.params.foto;
    const preco = props.route.params.preco;
    const hotel = props.route.params.hotel;
    const dias = props.route.params.diaria;

    const DATA =
        [
            {
                id: '1',
                aereo: 'Aéreo Ida e Volta',
                diaria: 'Hospedagem com café e diárias de ' + dias + ' dias',
                taxas: 'Taxas Inclusas',
                hotel: hotel,
            }
        ]


    navigation.setOptions({
        headerTitle: destino
    })

    return (

        <ScrollView style={styles.container}>
            <Image
                source={{ uri: imagem }}
                style={styles.imagem}
                resizeMode="cover"
            />

            <View style={styles.container2}>
                <Text style={styles.text} >{destino}</Text>
                <Text style={styles.text}>-</Text>
                <Text style={styles.text}>{preco}</Text>
            </View>
            <View style={styles.line} />

            <View>
                <Text style={[styles.title, { fontSize: 19 }]}>Pacote Incluso com: </Text>

                <View style={styles.container3}>
                    <FlatList
                        data={DATA}
                        style={{ width: "90%" }}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Card style={{ marginTop: 20 }}>
                                <Card.Content>
                                    <Paragraph style={{ fontWeight: 'bold', fontSize: 16 }}>º{item.aereo}</Paragraph>
                                    <Paragraph style={{ fontWeight: 'bold', fontSize: 16 }}>º{item.diaria}</Paragraph>
                                    <Paragraph style={{ fontWeight: 'bold', fontSize: 16 }}>º{item.taxas}</Paragraph>
                                </Card.Content>
                                <Card.Cover source={{ uri: item.hotel }} style={{ marginTop: 15 }} />
                            </Card>
                        }
                    />
                </View>

            </View>

            <View>

            </View>
            <View style={[styles.line, { marginTop: 30 }]} />
            <View>
                <Maps />
            </View>

            <View style= {{marginTop:40}}/>

        </ScrollView>
    )

}

export default Details