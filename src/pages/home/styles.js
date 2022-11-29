import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
    },
    topo: {
        marginBottom: 8
    },

    image: {
        height: 200,
        width: 420
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: '1%'
    },
    container2: {
        //alignItems: 'center'
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    botaoIcon: {
        position: "absolute",
        right: 0,
        alignSelf: 'center'
    },
    line: {
        'borderBottomColor': 'grey',
        'borderBottomWidth': 2
    },
    container3:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
    },
    text2: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: '5%',
        marginTop:10
    }
})