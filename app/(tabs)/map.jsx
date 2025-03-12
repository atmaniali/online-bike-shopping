import { Text, View, ImageBackground } from "react-native";
import { images } from "../../constants/Icons";

const map = () => {
    return ( 
        <View style={{flex:1}}>
            <ImageBackground source={images.background} >
                <View>
                    <Text>Map</Text>
                </View>
            </ImageBackground>
        </View>
     );
}
 
export default map;
