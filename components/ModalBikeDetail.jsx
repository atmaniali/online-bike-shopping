import { useState } from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Colors } from '@/constants/Color';
import { icons } from '@/constants/Icons';
import ModalInfoCardWithDescription from './modal/ModalInfoCardWithDescription';
import ModalInfoCard from './modal/ModalInfoCard';



const ModalBikeDetail = ({modalVisible, setModalVisible, modalItem, setModalItem}) => {
    const [showDescription, setShowDescription] = useState(false);
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
        console.log('click like button', like)
    }

    const handleCloseModal = () => {
        setModalVisible(!modalVisible)
        setModalItem(null)
    }

    const handleShowDescription = () => {
        setShowDescription(!showDescription)
    }

  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={modalVisible}
    onRequestClose={handleCloseModal}
    >
        <View style={styles.modalContainer}>
            {/* <ImageBackground source={images.background} > */}
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={handleCloseModal}>
                        <Text>❌</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>{modalItem.name}</Text>
                </View>
                
                <View style={styles.imageModalContainer}>
                    <TouchableOpacity style={styles.likeButton} onPress={handleLike}>
                    <Image source={icons.like} style={styles.likeIcon} />
                    </TouchableOpacity>
                    <Image source={modalItem.image} style={styles.imageModal} />
                </View>
                
            </View>
            {showDescription ? <ModalInfoCardWithDescription modalItem={modalItem} handleShowDescription={handleShowDescription} /> : <ModalInfoCard handleShowDescription={handleShowDescription} />}
            {/* </ImageBackground> */}
        </View>
    </Modal>
  )
}

export default ModalBikeDetail

const styles = StyleSheet.create({
    modalContainer:{
        flex:2,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(55, 182, 233, 0.9)',
        zIndex:2
    },
    modalContent:{
        width: '90%',
        padding: 15
    },
    modalHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height: 30,
        marginVertical:20
    },
    modalTitle:{
        color: Colors.white,
        fontWeight: 'bold',
        fontSize: 18,
        marginRight:40
    },
    imageModalContainer:{
        width:'100%',
        height: 200,
        marginVertical: 20,
        // backgroundColor:'white',
        alignItems:'center'
    },
    imageModal:{
        width:'90%',
        height: 200,
    },
    modalInfoCard:{
        flex:1,
        // marginTop:10,
        borderWidth:1,
        borderColor: Colors.blackgray,
        width: '100%',
        // backgroundColor :'red',
        padding: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    ModalButtons:{
        flexDirection : 'row',
        marginBottom:10,
        justifyContent: 'space-around'
    },
    ModalButton:{
        borderWidth:1,
        borderColor:Colors.blackgray,
        borderRadius: 12,
        padding: 10
    },
    ModalButtonText:{
        fontSize:16
    },
    ModalButtonTextSelected:{
        fontSize:16,
        fontWeight: 'bold',
        color: Colors.purple
    },
    modalInfoCardDetail:{
        marginVertical: 10,
    },
    description:{
        marginVertical: 15,
        color: Colors.black,
        fontSize: 16,
    },
    modalCardFooter:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height: 100,
        flexDirection: 'row',
        borderWidth:1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor: Colors.blackGray
    },
    modalCardFooterPrice:{
        color: Colors.purple,
        fontSize: 18
    },
    modalCardFooterButton:{
        borderWidth:1,
        borderColor: Colors.black,
        padding:15,
        borderRadius: 12,
    },
    modalCardFooterButtonTitle:{
        color:Colors.white,
        fontSize:16
    },
    likeIcon:{
        width: 28,
        height: 24,
        tintColor: Colors.white
    },
    likeButton:{
        position: 'absolute',
        top: 20,
        right: 10,
        marginBottom:10
    }
})