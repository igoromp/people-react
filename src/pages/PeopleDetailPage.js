import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements';
import {Strings}  from '../utils';


export default class PeopleDetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            people: this.props.navigation.state.params
        };
    }

    render(){
        const {people} = this.state; 
        const {nat,phone,location,email,cell} = people;       
        const { large }= people.picture;

        //  console.log(people);
        return (
            <View>
                <Card
                    image={{uri:large}}
                    imageStyle={{alignSelf:'center',aspectRatio:1}}
                    title={`Informações`}>
                    
                    <Text  style={PeopleDetailStyle.label}>Email:{email}</Text>
                    <Text style={PeopleDetailStyle.label}>Cidade:{location.city}/ Estado:{location.state}</Text>
                    <Text style={PeopleDetailStyle.label}>Telefone:{phone}</Text>
                    <Text style={PeopleDetailStyle.label}>Celular:{cell}</Text>
                    <Text style={PeopleDetailStyle.label}>Nacionalidade:{nat}</Text>                                        
                </Card>
            </View>                     
        );
    }
}

//STYLES 
const PeopleDetailStyle= StyleSheet.create({
    label : {
        marginBottom: 10,
        marginLeft:10,
        fontSize:16,
        color:'rgba(66,86,151,.85)'
    }
});
 