import React,{Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import StokListDetay from './StokListDetay';
import data from '../temp/stokList.json';

class StokList extends Component{
  state = { stoks:[] };

  componentWillMount(){
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then(response => this.setState({stoks: response.data}));
    this.setState({stoks:data});
    console.log(this.props);
  }

  renderStokList(){
    return this.state.stoks.map(stok =>
      <StokListDetay key={stok.stokKodu} stok={stok}/>
    );
  }

  render(){
    return (
      <View>
        {this.renderStokList()}
      </View>
    );
  }
}

export default StokList;
