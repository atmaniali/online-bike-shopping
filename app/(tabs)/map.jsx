import { Text, View, ImageBackground } from "react-native";
import { images } from "@/constants/Icons";
import { Colors } from "@/constants/Color";

const map = () => {
    return ( 
        <View style={{flex:1, backgroundColor: Colors.blackGray}}>
            <ImageBackground source={images.background} style={{flex:1}}>
                <View>
                    <Text style={{color: Colors.white}}>Map</Text>
                </View>
            </ImageBackground>
        </View>
     );
}
 
export default map;
