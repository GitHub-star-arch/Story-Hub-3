import React from 'react';
import {Text, View, StyleSheet,  keyAvoidingView } from 'react-native';
export default class Search extends React.Component {

    constructor(){
        super();
        this.state={
            Title:'',
            Author:'',
            Story:'',
        }
    }

    render(){
        return(
            <keyAvoidingView>
                <Text style={stylez.Searchsty}>
                  Search
                </Text>
            </keyAvoidingView>
        )
    }
}
const stylez = StyleSheet.create({
    Searchsty:{
        justifyContent:'center',
        backgroundColor:'green',
        alignText:'center',
        Textsize:'10',
        fontWeight:'5',
        Textcolor:'Red',

    }
})