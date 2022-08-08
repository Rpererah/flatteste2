import React from 'react';
import {Text, View,StatusBar, Image, FlatList } from 'react-native';

const chansey='https://2.bp.blogspot.com/-fr3Y-fqZbBE/VOdlZ6acBJI/AAAAAAAAAVU/EUNZUokOzq4/s1600/113_2_400.png';
const drampa='http://static.pokemonpets.com/images/monsters-images-800-800/780-Drampa.png';
const zoroark='https://static.wikia.nocookie.net/pokepediabr/images/d/d3/571Zoroark-Hisui.png/revision/latest?cb=20211026210919&path-prefix=pt-br';

const pokemons=[
  {
    nome:'chansey',
    pokemon:chansey
  },
  {
    nome:'drampa',
    pokemon:drampa
  },
  {
    nome:'zoroark',
    pokemon:zoroark
  }
]

const Pokemon=({nome,pokemon})=>(
<View style={{backgroundColor:'orange',marginBottom:10}}>
<Text style={{color:'white',textAlign:'center'}}>{nome}</Text>
<Image style={{height:150,width:150}} source={{uri:`${pokemon}`}} />
</View>
);

const renderizaPokemon=({item})=>(
<Pokemon nome={item.nome} pokemon={item.pokemon} />
);


export default function App() {
 
  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <StatusBar style="auto" />
      <FlatList
      data={pokemons}
      renderItem={renderizaPokemon}

      />
<Text>Testando</Text>     
    </View>
  );
}


