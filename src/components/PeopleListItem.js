import React from 'react';
import {TouchableOpacity}  from 'react-native';
import {ListItem} from 'react-native-elements';

import {Strings} from '../utils';

const PeopleListItem = props =>{
    const { people,navDetail} = props;
    const {title, first,last} = people.name;
    
    return( 
       <TouchableOpacity  onPress={
           ()=>{
               console.log(navDetail);
               return navDetail('PeopleDetailPage',people); 
           }
        } >
        <ListItem 
            roundAvatar
            containerStyle = {{marginBottom:5}}
            key={first} 
            avatar={people.picture.thumbnail} 
            title={`${Strings.capitalize(title)}  ${Strings.capitalize(first)}  ${Strings.capitalize(last)}`} />
        </TouchableOpacity>
);}

export default PeopleListItem;