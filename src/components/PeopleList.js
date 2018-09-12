import React from 'react';
import {View, Text,StyleSheet,FlatList}  from 'react-native';
import {Icon} from 'react-native-elements';

import {Utils} from '../utils';

import PeopleListItem from './PeopleListItem';

const PeopleList = props =>{
    const {peoples,navigation} = props;
   
    return( 
        <View>
            <FlatList containerStyle = {{marginBottom:20}} 
                /* {
                    peoples.map(p =>(
                        <PeopleListItem  key={Utils.generateKey()} people={p} navDetail={navigation}/>             
                    ))
                } */
                    data={peoples}
                    keyExtractor={(item)=>item.login.md5}
                    renderItem={({item})=><PeopleListItem  key={Utils.generateKey()} people={item} navDetail={navigation} />   }
                />

        </View>
)};

export default PeopleList;