import React from 'react';
import { View,ActivityIndicator,StyleSheet,Text} from 'react-native';
//import Header from '../components/Header';
import axios from 'axios';
import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            peoples : [],
            loading:false,
            error:false,
        };

    }

    componentDidMount(){
    
        this.setState({loading:true});
       
            axios
            .get('https://randomuser.me/api?nat=br&results=150')
            .then(resp=>{            
                const {results} =  resp.data;
            this.setState({
                peoples : results,
                loading:false
            });
            
            }).catch(error=>{
                this.setState({loading:false,error:true});
                
            }); 
      

    }
  
  

    render() {
    return (
        <View style={Style.container}>
            { 
                this.state.loading 
                    ? <ActivityIndicator  size='large' style={{marginTop:20}}/> 
                    : this.state.error
                        ? <Text style={{color:'red',fontSize:14,alignSelf:'center'}}>Error, servidor não pode responder a requisição</Text>
                        :<PeopleList 
                        peoples={this.state.peoples} 
                        navigation={(page,people)=>this.props.navigation.navigate(page,people)}/>    
            }
                  
        </View>
        );
    }
}

const Style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    }
});

