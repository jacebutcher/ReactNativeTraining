import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';


//HANDLERS
///////////////////////////////////////////////////////////////////////////
export const handleLoginPress = () => {
    //TODO: Implement logic to process login based on Email/Password values.
}

export const handleForgotPassPress = () => {
    //TODO: Implement logic to process password reset
}

export const handleCreateAccPress = () => {
    //TODO: Implement logic to navigate to signup page.
}

export default class ServiceSelector extends React.Component {
    state={
      email:"",
      password:""
    }
    
    render(){
      return (
        <View style={styles.container}>
            <View>
          <Image resizeMode={'contain'} style={styles.image} source={require("../../images/hydrip.png")} />
          </View>
          <Text style={styles.logo}>What brings you here today?</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    logo:{
      fontWeight:"bold",
      fontSize:25,
      color:"blue",
      marginTop: 20,
      ...StyleSheet.absoluteFillObject
    },
    inputView:{
      width:"80%",
      backgroundColor:"#D4D4D4",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    forgot:{
      color:"black",
      fontSize:14
    },
    create:{
      color:"black",
      fontSize:14
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#72d9e9",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white",
      fontSize: 20
    },
    image: {
      width: 180,
      height: 60,
      marginTop: 20,
      ...StyleSheet.absoluteFillObject
  },
    disclaimer:{
      color:"black",
      fontSize:10,
      marginTop: 5
    }
  });
  