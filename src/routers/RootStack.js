import {createStackNavigator} from 'react-navigation';
import {Strings} from '../utils';
//ROUTERS
import {
        PeoplePage,
        PeopleDetailPage
        } from '../pages';

const RootStack = createStackNavigator({
    'Main':{
        screen: PeoplePage ,
        navigationOptions:({navigation})=>{           
            return ({title:''});
        } 
    },
    'PeopleDetailPage':{
        screen: PeopleDetailPage,
        navigationOptions:({navigation})=>{ 
            const {params} = navigation.state;
            const {first,last} = params.name
            return ({
                title:`${Strings.capitalize(first)} ${Strings.capitalize(last)}`,    
            });
        }
    }
},{ //Configs
    navigationOptions:{
        title: 'Pessoas',
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'rgba(66,86,151,.85)',
            borderWidth:2,
            borderBottomColor:'#000'
        },
        headerTitleStyle:{
            color:'#fff',
            fontSize:20
        }
    }
});

export default RootStack;