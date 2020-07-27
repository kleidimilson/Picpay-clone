import React from 'react';
import { View,ScrollView,Text, TouchableOpacity,Image, StyleSheet } from 'react-native';

import img1 from '../../images/01.png'
import img2 from '../../images/02.png'
import img3 from '../../images/03.png'
import img4 from '../../images/04.png'
import img5 from '../../images/05.png'
import img6 from '../../images/06.png'

// import { Container } from './styles';


const itens = [
    
    {
      "key": "1",
      "nome": "Receber",
      "img": img1
    },
   {
      "key": "2",
      "nome": "Uber",
      "img": img2
    },
    {
      "key": "3",
      "nome": "Transporte",
      "img": img3
    },
      {
      "key": "4",
      "nome": "Sky",
      "img": img4
    },
    {
      "key": "5",
      "nome": "Doações",
      "img": img5
    },
    {
        "key": "6",
        "nome": "Pagarmentos",
        "img": img6
      },
]
const Scroll = () => (
    <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
           itens.map(item => (
               
                 <TouchableOpacity  key={item.key} style={styles.item}>
                    <Image style={styles.img} source={item.img}/>
                    <Text style={styles.texto}>{item.nome}</Text>
                 </TouchableOpacity>
          
           ))
        }
    </ScrollView>
)

const styles = StyleSheet.create({
    scroll: {
        marginBottom: 20
    },
    item: {
        marginLeft: 10,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center',
              
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold'
    },
    img: {
      borderWidth: 3,
      borderRadius: 30,
      borderColor: '#353638'
    }
})
  


export default Scroll;