import React from "react";
import { View,Text,Image, SafeAreaView } from "react-native";
import styles from './StoreCard.style';

const StoreCard = ({product}) => {

 return(

  <SafeAreaView style ={styles.container}>
    <View style ={styles.imgContainer}>
    <Image style={styles.image} source = {{uri: product.imgURL}}/>
    </View>
    <View style={styles.inner_container}>
    <Text style= {styles.title}>{product.title}</Text>
    <Text style= {styles.price}>{product.price}</Text>
    <Text style={styles.stock}>
     {!product.inStock && 
     <View>
     <Text style={styles.inStockTitle}>STOKTA YOK</Text>
   </View> 
   }

    </Text>
    </View>
  </SafeAreaView>

    );
}

export default StoreCard;
