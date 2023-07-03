import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

function App() {

  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextFrase] = useState('');

  let frases = [
    'Hoje você tem a oportunidade de construir o amanhã que você deseja.',
    'Sonhe sem medos, viva sem limites.',
    'Se o plano não funciona, mude o plano, não a meta.',
    'Não se conforme com o que você precisa, lute pelo que você merece.',
    'A força mais potente do universo é a fé.',
    'Acredite em milagres, mas não dependa deles.',
    'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.',
    
        

  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    
    setTextFrase(' "' + frases[numeroAleatorio] + '" ' );
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciarBiscoito(){
    setImg(require('./src/biscoito.png'));
    setTextFrase('');
  }
  
  return(
    <View style={ styles.container }>

      <Image
      source={img}
      style={styles.img}
      />

      <Text style={ styles.textofrase }> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao}   onPress={ quebraBiscoito }>
       <View style={styles.btnArea} >
         <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
       </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop: 15, borderColor: '#121212' }]}   onPress={ reiniciarBiscoito }>
       <View style={styles.btnArea} >
         <Text style={[styles.btnTexto, {color: '#121212' }]}>Reiniciar Biscoito</Text>
       </View>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;