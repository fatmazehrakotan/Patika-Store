import {Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get('window').width;

export default StyleSheet.create({
    container:{ 
        flex : 1,
        width : Dimensions.get('window').width / 2,
        borderRadius : 10,
        backgroundColor : '#eceff1',
        margin: 5,
       
    },
    imgContainer:{
        alignItems: 'center',
        marginVertical: 5,
    },

    image:{
      width : Dimensions.get('window').width / 2.4,
      height: Dimensions.get('window').height / 4,
      borderRadius : 10,
      resizeMode : 'contain',
      backgroundColor:'white',
  
    },
    title:{
      fontSize: 18,
      fontWeight:'bold',  
    },
    inner_container:{
        marginHorizontal: 11,
        marginVertical: 5,
    },
    price:{
        fontSize: 16,
        fontWeight : 'bold',
        color: 'grey',

    },
    inStockTitle:{
        color:'red',
        fontWeight:'bold'
    }
});