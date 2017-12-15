import React from 'react';
import {Text,View,Image} from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const StokListDetay = (props) =>{
  return (
    <Card>
      <CardItem>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: props.stok.img }}
          />
        </View>
        <View style = {styles.headerContentStyle}>
          <Text style={styles.stokKoduStyle}>
            {props.stok.stokKodu}
          </Text>
          <Text>
            {props.stok.stokAdi}
          </Text>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection : 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    marginLeft:10
  },
  stokKoduStyle:{
    fontSize:18
  }
};

export default StokListDetay;
