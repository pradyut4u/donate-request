import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import db from '../config.js'

export default class BookDonate extends React.component{
constructor(){
	super()
	this.state={
		requestedBookList:[]
	}
	this.requestref=null
}

getBookList = () =>{
this.requestref=db.collection("requestedBook").onSnapShot(snapShot)=>{
	var bookList = snapShot.docs.map(doc=>doc.data())
	this.setState({
		requestedBookList:bookList
	})
}
}

componentDidMount (){
	this.getBookList()
}

componentWillUnmount (){
	this.requestref()
}

keyExtractor = (item,index) =>{
 index.toString()
}
renderItem = ({item,i}) =>{
return(
	<ListItem key={i} title={item.bookName} subtitle={item.reason} titleStyle={{color:"blue",fontWeight:"bold"}}
	rightElement={
	<TouchableOpacity>
	<Text>View</Text>
	</ToochableOpacity>
	bottomDivider
	}>
)
}
render(){
	return(
		<View>
		{this.state.requestedBookList.length===0?
		(
		<Text>List of books</Text>)
		}:(<FlatList keyExtractor={this.keyExtractor}data={htis.state.requestedBookList} renderItem={this.renderItem}>)
		<View
	)
}
}