import React from "react";
import {View,Text,StyleSheet} from "react-native";

const styles = StyleSheet.create({ 
    container:{
        backgroundColor:'#3c58e8',
        height:80,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:25,
        color:'#fff'
    }
});

const Header = props =>(
    <View style={styles.container} > 
       <Text style={styles.title}>{props.title}</Text>
    </View>
);



export default Header;