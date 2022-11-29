import { StyleSheet, View } from "react-native"
import MapView from "react-native-maps"
import * as Location from 'expo-location';
import { useEffect, useState } from "react";


const Maps = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('A permissão para acessar o local foi negada');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
     

    return (
        <View style={styles.container}>
            <MapView 
            style={styles.map}
            showsUserLocation = {true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
    },
    map:{
        height:250,
        width: 380
    }
})

export default Maps