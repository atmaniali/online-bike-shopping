import { useState} from "react";
import { View, Image, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ImageBackground, Platform, Text } from "react-native";
import { SearchBar } from '@rneui/themed';
import { Colors } from "@/constants/Color";
import { icons, images } from "@/constants/Icons";
import data  from '@/services/data'
import BikeList from '@/components/BikeList'
import ButtonGroup from '@/components/ButtonGroup'
import ModalBikeDetail from "@/components/ModalBikeDetail";


const index = () => {
    const [like, setLike] = useState(null);
    const [modalVisible, setModalVisible] = useState(true)
    const [modalItem, setModalItem] = useState(null)
    const [bikes, setBikes] = useState(data)
    const [search, setSearch] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);

    const updateSearch = (search) => {
        setSearch(search);
      };

    const handleBikesFilter = (text) => {
        const filteredBikes = data.filter(bike => bike.category === text)
        setBikes(filteredBikes)
    }

    const handleAllBikes = () => {
        setBikes(data)
    }

    const handleSearch = () => {
        setSearchVisible(!searchVisible)
    }

    const alertButton = () => {
        Alert.alert("test")
    }
    return ( 
    <View style={styles.container}>
        <SafeAreaView style={{flex:1}}>
            <ImageBackground source={images.background} style={{flex:1}} >
                {searchVisible ? (
                    <View style={styles.header}>
                    <SearchBar
                    value={search}
                    onChangeText={updateSearch}
                    platform={Platform.OS === 'web' ? 'default' : Platform}
                    containerStyle={{width:'80%'}}
                    />
                    <TouchableOpacity onPress={handleSearch}>
                        <Text style={{color: Colors.white}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
                ) : (
                    <View style={styles.header}>
                    <Text style={styles.textHeader}>Chose Your Bike</Text>
                    <TouchableOpacity onPress={handleSearch}>
                        <Image source={icons.search} style={styles.icon}  />
                    </TouchableOpacity>
                </View>
                )}
                
                <View style={styles.cards}>
                    <View style={styles.largeCard}>
                        <Image source={icons.bike} style={styles.imageLargeCard} />
                        {/* <Text style={styles.textLargeCard}>30% Off</Text> */}
                    </View>
                    {/* Button Group Component */}
                    <ButtonGroup handleBikesFilter={handleBikesFilter} handleAllBikes={handleAllBikes} />

                    {/* Bike List Items */}
                    <BikeList 
                    data = {bikes}
                    modalVisible={modalVisible} 
                    setModalVisible = {setModalVisible}
                    like = {like}
                    setLike = {setLike}
                    setModalItem={setModalItem}
                    />
                </View>

                {modalItem && <ModalBikeDetail 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible}
                modalItem={modalItem}
                setModalItem={setModalItem}
                />}
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
// DONE : add modal to show details of bike 
// DONE : update the modal to show details of bike only when clocking in button 
// DONE : filter data with button groups
// TODO : activate search button 
// TODO : update design to look nice
// TODO : update view to not make button bar cache some view of flat list
// TODO : add pagination to flat list
// TODO : add loading to flat list
// TODO : add pull to refresh to flat list
// TODO : add infinite scroll to flat list
// TODO : add search to flat list
// TODO : add animation


