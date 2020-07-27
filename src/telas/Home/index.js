import React from 'react';
import { Text,StyleSheet, View,ScrollView,TouchableOpacity,Image } from 'react-native';
import {MaterialCommunityIcons,EvilIcons,AntDesign,MaterialIcons,Ionicons} from '@expo/vector-icons';
import Scroll from '../../components/scroll/index';
import avatar from '../../images/man.jpg';
import avatar2 from '../../images/man2.jpg';
import avatar3 from '../../images/woman.jpg';
import avatar4 from '../../images/woman1.jpg';

// import { Container } from './styles';

const Home = () => (
 
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity><MaterialCommunityIcons name="qrcode-scan" color="#25ca6d" size={25}/></TouchableOpacity>
      <View style={styles.saldo}>
          <Text style={styles.textoSaldo}>Meu saldo</Text>
          <Text style={styles.valorSaldo}>R$ 290,00</Text>
      </View>
      <TouchableOpacity><AntDesign name="adduser" color="#25ca6d" size={25} /></TouchableOpacity>
    </View>

    <View style={styles.sugestoes}>
      <View style={styles.sugestoesHeader}>
        <Text style={styles.TextSugestoes}>Sugestões para você</Text>
        <Scroll/>
      </View>
    </View>
    <View style={styles.atividades}>
      <View style={styles.headerAtividades}>
        <Text style={styles.textoAtividades}>Atividades</Text>
        <View style={styles.tabsAtividades}>
            <Text style={{color: '#13A35E', fontWeight: 'bold', fontSize: 14, borderBottomWidth: 2.5, borderBottomColor: '#13A35E'}}>Todas</Text>
            <TouchableOpacity><Text style={styles.textoAtividades}>Minhas</Text></TouchableOpacity>
        </View>
      </View>
      <ScrollView vertical={true}>
        <View style={styles.itemAtividades}>
           <View style={styles.itemAtividadesHeader}>
              <Image style={styles.avatar} source={avatar} />
              <Text style={styles.textoAtividades}>@mascos pagou a Você</Text>
           </View>
           <Text style={styles.textoAtividadesBody}>Have a nice beer</Text>
           <View style={styles.itemAtividadesFooter}>
              <View style={styles.AreaValor}>
                <Text style={{color:'#cc0c2f',fontWeight: 'bold', fontSize: 15, marginRight: 2}}>R$ 50</Text>
                <Text style={{color: '#a4a4a4', fontWeight: 'bold', marginRight: 2, marginLeft: 5}}>|</Text>
                <EvilIcons name="lock" color="#a4a4a4" size={25} />
                <Text style={{color:'#a4a4a4'}}>2 semanas atrás</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="chat-bubble-outline" color="#a4a4a4" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4', marginRight: 10}}>1</Text>
                <Ionicons name="ios-heart" color="#13A35E" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4',marginRight: 10}}>3</Text>
              </View>
           </View>
        </View>
        <View style={styles.itemAtividades}>
           <View style={styles.itemAtividadesHeader}>
              <Image style={styles.avatar} source={avatar3} />
              <Text style={styles.textoAtividades}>@ana pagou a Você</Text>
           </View>
           <Text style={styles.textoAtividadesBody}>Have a nice beer</Text>
           <View style={styles.itemAtividadesFooter}>
              <View style={styles.AreaValor}>
                <Text style={{color:'#cc0c2f',fontWeight: 'bold', fontSize: 15, marginRight: 2}}>R$ 30</Text>
                <Text style={{color: '#a4a4a4', fontWeight: 'bold', marginRight: 2, marginLeft: 5}}>|</Text>
                <EvilIcons name="lock" color="#a4a4a4" size={25} />
                <Text style={{color:'#a4a4a4'}}>2 semanas atrás</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="chat-bubble-outline" color="#a4a4a4" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4', marginRight: 10}}>0</Text>
                <Ionicons name="ios-heart" color="#13A35E" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4',marginRight: 10}}>2</Text>
              </View>
           </View>
        </View>
        <View style={styles.itemAtividades}>
           <View style={styles.itemAtividadesHeader}>
              <Image style={styles.avatar} source={avatar2} />
              <Text style={styles.textoAtividades}>@paulo pagou a Você</Text>
           </View>
           <Text style={styles.textoAtividadesBody}>Have a nice beer</Text>
           <View style={styles.itemAtividadesFooter}>
              <View style={styles.AreaValor}>
                <Text style={{color:'#cc0c2f',fontWeight: 'bold', fontSize: 15, marginRight: 2}}>R$ 10</Text>
                <Text style={{color: '#a4a4a4', fontWeight: 'bold', marginRight: 2, marginLeft: 5}}>|</Text>
                <EvilIcons name="lock" color="#a4a4a4" size={25} />
                <Text style={{color:'#a4a4a4'}}>2 semanas atrás</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="chat-bubble-outline" color="#a4a4a4" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4', marginRight: 10}}>0</Text>
                <Ionicons name="ios-heart" color="#13A35E" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4',marginRight: 10}}>2</Text>
              </View>
           </View>
        </View>
        <View style={styles.itemAtividades}>
           <View style={styles.itemAtividadesHeader}>
              <Image style={styles.avatar} source={avatar3} />
              <Text style={styles.textoAtividades}>@mascos pagou a Você</Text>
           </View>
           <Text style={styles.textoAtividadesBody}>Have a nice beer</Text>
           <View style={styles.itemAtividadesFooter}>
              <View style={styles.AreaValor}>
                <Text style={{color:'#cc0c2f',fontWeight: 'bold', fontSize: 15, marginRight: 2}}>R$ 30</Text>
                <Text style={{color: '#a4a4a4', fontWeight: 'bold', marginRight: 2, marginLeft: 5}}>|</Text>
                <EvilIcons name="lock" color="#a4a4a4" size={25} />
                <Text style={{color:'#a4a4a4'}}>2 semanas atrás</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="chat-bubble-outline" color="#a4a4a4" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4', marginRight: 10}}>0</Text>
                <Ionicons name="ios-heart" color="#13A35E" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4',marginRight: 10}}>2</Text>
              </View>
           </View>
        </View>
        <View style={styles.itemAtividades}>
           <View style={styles.itemAtividadesHeader}>
              <Image style={styles.avatar} source={avatar2} />
              <Text style={styles.textoAtividades}>@mascos pagou a Você</Text>
           </View>
           <Text style={styles.textoAtividadesBody}>Have a nice beer</Text>
           <View style={styles.itemAtividadesFooter}>
              <View style={styles.AreaValor}>
                <Text style={{color:'#cc0c2f',fontWeight: 'bold', fontSize: 15, marginRight: 2}}>R$ 30</Text>
                <Text style={{color: '#a4a4a4', fontWeight: 'bold', marginRight: 2, marginLeft: 5}}>|</Text>
                <EvilIcons name="lock" color="#a4a4a4" size={25} />
                <Text style={{color:'#a4a4a4'}}>2 semanas atrás</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons name="chat-bubble-outline" color="#a4a4a4" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4', marginRight: 10}}>0</Text>
                <Ionicons name="ios-heart" color="#13A35E" size={16} style={{marginRight: 2}} />
                <Text style={{color: '#a4a4a4',marginRight: 10}}>2</Text>
              </View>
           </View>
        </View>
      </ScrollView>
     
    </View>




  </View>
    

  
)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000'
    },
    header: {
      backgroundColor: '#000',
      height: 60,
      padding: 10,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
     
    },
    saldo : {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
      
    },
    textoSaldo: {
      color: '#fff',
      fontSize: 12
    },
    valorSaldo: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    sugestoes : {
      height: 170,
      backgroundColor: '#1F222B',
      justifyContent: 'center',
      alignItems: 'center'
  
    },
    sugestoesHeader: {
      justifyContent: 'flex-start'
    },
    TextSugestoes: {
      color: '#fff',
      margin: 20,
      fontSize: 16,
      fontWeight: 'bold'
    },
    atividades: {
      backgroundColor: '#000',
      
    },
    headerAtividades: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15
    },
    tabsAtividades: {
      flexDirection: 'row',
      marginRight: 20,
      marginTop: 10
    },
    textoAtividades: {
      marginLeft: 20,
      color: '#fff',
      fontWeight: 'bold'
    },
    itemAtividades: {
      margin: 10,
      marginBottom: 5,
      width: 390,
      height: 150,
      borderRadius: 7,
      backgroundColor: '#1F222B',
      justifyContent: 'flex-start'
    },
    itemAtividadesHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 22
    },
    textoAtividadesBody: {
      color: '#a4a4a4',
      marginLeft: 10,
      
    },
    itemAtividadesFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 14
    },
    AreaValor :{
      flexDirection: 'row',
      marginLeft: 10
    }
  })
 


export default Home;