import { Text, View, ImageBackground, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import { images } from "@/constants/Icons";
import { Colors } from "@/constants/Color";

const map = () => {
    return ( 
        <View style={{flex:1, backgroundColor: Colors.blackGray}}>
            <ImageBackground source={images.background} style={{flex:1}}>
                <View style={styles.container}>
                    <MapView style={styles.map} />
                </View>
            </ImageBackground>
        </View>
     );
}
 
export default map;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
