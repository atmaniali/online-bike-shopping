import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { images } from '@/constants/Icons';
import { Colors } from '@/constants/Color';



const ModalBikeDetail = ({modalVisible, setModalVisible, modalItem, setModalItem}) => {
    const handleCloseModal = () => {
        setModalVisible(!modalVisible)
        setModalItem(null)
    }

  return (
    <Modal
    animationType='slide'
    transparent={true}
    visible={modalVisible}
    onRequestClose={handleCloseModal}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={handleCloseModal}>
                        <Text>❌</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>{modalItem.name}</Text>
                </View>
                
                <View style={styles.imageModalContainer}>
                    <Image source={modalItem.image} style={styles.imageModal} />
                </View>
                
            </View>
            <View style={styles.modalInfoCard}>
                    <View style={styles.ModalButtons}>
                        <TouchableOpacity style={styles.ModalButton}>
                            <Text style={styles.ModalButtonText}>Description</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ModalButton}>
                            <Text style={styles.ModalButtonText}>Specification</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modalInfoCardDetail}>
                        <Text style={styles.modalTitle}>{modalItem.name}</Text>
                        <Text style={styles.description}>
                        {modalItem.description}
                        </Text>
                    </View>
                    <View style={styles.modalCardFooter}>
                        <Text style={styles.modalCardFooterPrice}>$ {modalItem.price}</Text>
                        <TouchableOpacity style={styles.modalCardFooterButton}>
                            <Text style={styles.modalCardFooterButtonTitle}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    </Modal>
  )
}

export default ModalBikeDetail

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        // justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(0,0 , 0, 0.9)',
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
        // backgroundColor:'red',
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
        color: Colors.gray,
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
    }
})