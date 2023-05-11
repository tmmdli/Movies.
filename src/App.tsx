import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Movies from  './Movies' ;

const App = () =>{
return(
  <SafeAreaView style ={styles.container }>   
  <Movies/>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'weit'
  },

});
export default App;

