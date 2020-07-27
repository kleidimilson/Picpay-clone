import React from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


// import { Container } from './styles';

const payButton = () => (
     <TouchableOpacity>
        <LinearGradient style={styles.btn}
            colors={[ '#45DA74', '#2EB261']}
        >
          <MaterialIcons name="attach-money" size={20} color="#fff"/>
          <Text style={{color:'#fff'}}>Pagar</Text>
        </LinearGradient>

     </TouchableOpacity>

      
     
  )
  const styles = StyleSheet.create({
      btn: {
          backgroundColor: '#25CA6D',
          width: 61,
          height: 60,
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
      }
  })


export default payButton;