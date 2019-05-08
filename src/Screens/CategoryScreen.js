// import React, {Component} from 'react';
// import {AppRegistry, StyleSheet, Text, View} from 'react-native';
// import {Header, Content, Container, Left, Button, Icon, Right} from 'native-base';
// import Firebase from "../tests/Firebase";
// export default class CategoryScreen extends Component {
//
//     state = {
//         items : []
//     }
//
//     componentDidMount(){
//         Firebase.database.ref('produits/').on('value', snapshot => {
//             let data = snapshot.val();
//             let items = Object.values(data);
//             this.setState({ items });
//         })
//     }
//
//     render() {
//         return (
//             <Container>
//
//                 <Content contentContainerStyle={styles.container}>
//                     <Text>Category Screen</Text>
//                 </Content>
//             </Container>
//         );
//     }
// }
//
//
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     Brand: {
//         flex: 1,
//         fontSize: 19,
//         fontWeight: 'bold',
//         color:'white'
//     },
//     headerBar: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         paddingLeft: 8,
//         backgroundColor:'red'
//     }
// });
// AppRegistry.registerComponent('CategoryScreen', ()=> CategoryScreen);

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View,ScrollView, ActivityIndicator} from 'react-native';
import {Header, Content, Container, Left, Button, Icon, Right} from 'native-base';
import products from "../../helpers/productData";
import CartProduct from '../components/Body/CartProduct';
import Firebase from '../tests/Firebase'
import * as firebase from "firebase";
import ItemComponent from './ItemComponent'
import CategorieItems from "../components/Body/CategorieItems";
//
// let db= Firebase.database;
// let prodRef = db.ref('produits/');
export default class CategoryScreen extends Component {

    state = {
        items : []
    }

    componentDidMount(){
        Firebase.database.ref('produits/').on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        })
    }


    render() {
        return (

            <Container>

                <Content contentContainerStyle={styles.container}>
                    <Text>Settings Screen</Text>
                </Content>
            </Container>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    },

    /*container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },*/
    Brand: {
        flex: 1,
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        backgroundColor:'red'
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }

});
AppRegistry.registerComponent('CategoryScreen', ()=> CategoryScreen);