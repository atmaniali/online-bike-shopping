import { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ImageBackground } from "react-native";
import { Colors } from "@/constants/Color";
import { icons, images } from "@/constants/Icons";
import data  from '@/services/data'
import BikeList from '@/components/BikeList'
import ButtonGroup from '@/components/ButtonGroup'
import ModalBikeDetail from "../../components/ModalBikeDetail";


const index = () => {
    const [like, setLike] = useState(null);
    const [modalVisible, setModalVisible] = useState(false)
    const [modalItem, setModalItem] = useState(null)

    const alertButton = () => {
        Alert.alert("test")
    }
    return ( 
    <View style={styles.container}>
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={images.background} >
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Chose Your Bike</Text>
                    <TouchableOpacity onPress={alertButton}>
                        <Image source={icons.search} style={styles.icon}  />
                    </TouchableOpacity>
                </View>
                <View style={styles.cards}>
                    <View style={styles.largeCard}>
                        <Image source={icons.bike} style={styles.imageLargeCard} />
                        <Text style={styles.textLargeCard}>30% Off</Text>
                    </View>
                    {/* Button Group Component */}
                    <ButtonGroup />

                    {/* Bike List Items */}
                    <BikeList 
                    data = {data}
                    modalVisible={modalVisible} 
                    setModalVisible = {setModalVisible}
                    like = {like}
                    setLike = {setLike}
                    setModalItem={setModalItem}
                    />
                </View>

                {modalItem ? <ModalBikeDetail 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                modalItem={modalItem}
                setModalItem={setModalItem}
                />: null}
            </ImageBackground>
       </SafeAreaView> 
    </View> );
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.blackGray,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 10,
        backgroundColor: Colors.black
    },
    textHeader:{
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white ,
        marginHorizontal: 10
    },
    icon:{
        padding: 5,
        width: 24,
        height: 24,
        tintColor: Colors.white,
        marginHorizontal: 10
    },
    cards: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        // backgroundColor: 'purple'
    },
    largeCard: {
        marginVertical: 10,
        width: 300,
        height: 250,
        justifyContent: 'center',
        // alignItems: 'center',
        borderColor: Colors.black,
        // marginHorizontal: 20,
        borderWidth: 1,
        // padding:10,
        // backgroundColor:"red",
        borderTopRightRadius : 12,
        borderTopLeftRadius : 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 20,
    },
    imageLargeCard: {
        width: '100%',
        height: 180
    },
    textLargeCard: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
    },
    
});

// DONE : add flatList to component and delete scrollView
// DONE : update like and dislike button in flat list
// TODO : update view to not make button bar cache some view of flat list
// DONE : add modal to show details of bike 
// TODO : filter data with button groups
// TODO : activate search button 
// TODO : update design to look nice
// TODO : add pagination to flat list
// TODO : add loading to flat list
// TODO : add pull to refresh to flat list
// TODO : add infinite scroll to flat list
// TODO : add search to flat list
// TODO : add animation


