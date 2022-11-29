import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


const DATA = [
    {
        id: '1',
        title: 'Itália',
        price: 2500,
        diaria:3,
        hotel: 'https://media-cdn.tripadvisor.com/media/photo-s/13/a6/82/49/presidential-suite-view.jpg',
        description: 'País com muita história, religiosidade e cultura vibrante, a Itália é um dos destinos da Europa preferidos dos turistas.',
        image: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/177493849.jpeg?quality=70&strip=info&w=925&w=636'

    },
    {
        id: '2',
        title: 'Portugal',
        price:2200,
        diaria:2,
        hotel: 'https://i0.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2018/02/hotel-em-portugal.jpg?fit=1360%2C907&ssl=1',
        description: 'Em toda viagem para Portugal, você se sente um pouco em casa. A língua é a mesma (com algumas diferenças divertidas, é verdade), vários pratos que chegam à mesa são familiares,  e a História portuguesa se funde à do Brasil em muitos capítulos.',
        image: 'https://www.eurodicas.com.br/wp-content/uploads/2018/02/capital-de-portugal-1200x900.jpg'
    },
    {
        id: '3',
        title: 'Alemanha',
        price: 2650,
        diaria:4,
        hotel: "https://www.memoriaseviagens.com.br/wp-content/uploads/2019/08/8BD22983-8255-4C04-89C9-8783CD0740F1-1140x855.jpeg",
        description: 'Seja em viagens de lazer ou intercâmbio, aproveite para conhecer uma série de monumentos e museus que rendem uma viagem fascinante pela capital alemã. Considerada um dos principais centros de arte e cultura da Europa, a capital alemã concentra pontos turísticos que vão muito além do famoso muro de Berlim',
        image: 'https://simplesmenteberlim.com/wp-content/uploads/2019/11/MercadoDeNatalAlemanha_Goslar.jpg'
    },
    {
        id: '4',
        title: 'Estados Unidos',
        price:3000,
        diaria: 5,
        hotel: 'https://media.architecturaldigest.com/photos/56a02d14883e5aaf0648d231/master/pass/classic-los-angeles-hotels-05.jpg',
        description: 'Há milhares de destinos para conhecer nos Estados Unidos, um dos países mais influentes do mundo. A icônica Estátua da Liberdade, a Times Square, os famosos musicais na Broadway em Nova York',
        image: 'https://blog.123milhas.com/wp-content/uploads/2022/03/BANNER-CIDADES-CONHECER-EUA-123MILHAS.jpg'
    },
];


const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.topo}>
                <Image source={require('../../../assets/layout.jpg')} style={styles.image} />
            </View>
            <View style={styles.container2}>
                <Text style={styles.text} >PACOTES</Text>
                <Text style={styles.text}>-</Text>
                <Text style={styles.text}>EXTERIOR</Text>
                <TouchableOpacity style={styles.botaoIcon}>
                    <MaterialIcons
                        name="add"
                        size={24}
                        color="black"
                        onPress={() => navigation.navigate('AddPacote')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.line} />

            <ScrollView >
                <Text style={styles.text2}>INTERNACIONAL</Text>
                <View style={{ padding: 5 }} />

                <View style={styles.container3}>
                    <FlatList
                        data={DATA}
                        style={{ width: "90%"}}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <Card style={{marginTop:20}}>
                                <Card.Content>
                                    <Title style={{fontWeight: 'bold', fontSize: 30}}>{item.title}</Title>
                                    <Paragraph style={{fontWeight: 'bold', fontSize: 16}}>{item.description}</Paragraph>
                                </Card.Content>
                                <Card.Cover source={{ uri: item.image }} style={{marginTop:15}}/>
                                <Card.Actions>
                                    <Button onPress={() => navigation.navigate('Details', {destino: item.title, foto: item.image, preco: item.price, hotel: item.hotel, diaria: item.diaria})}>Detalhes</Button>
                                </Card.Actions>
                            </Card>
                        }
                    />
                </View>

            </ScrollView>



        </View>
    )

}

export default Home