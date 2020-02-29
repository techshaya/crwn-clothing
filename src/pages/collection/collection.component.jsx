import React,{useEffect} from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {SelectCollection} from '../../redux/shop/shop.selectors';
import {firestore} from '../../firebase/firebase.utils';
const mapStateToProps =(state,ownProps)=>({
	collection:SelectCollection(ownProps.match.params.collectionId)(state)
	})

const CollectionPage=({collection})=>
{

	
	useEffect(() => {
		    console.log('I am subscribing')
		    const unsubscribeFromCollections = firestore.
	                                       collection('collections').
	                                       onSnapshot(snapshot =>console.log(snapshot))
	       return ()=>
	       {
               console.log('I am unsubscribing')
	       	   unsubscribeFromCollections()
	       }
	}, [])
    const {items,title} = collection;
	//console.log(SelectCollection(match.params.collectionId))
	// console.log(collection)
	return(<div className="collection-page">
		         <h2 className="title">{title}</h2>
		         <div className="items" >
		         	{
                       items.map(item =><CollectionItem key={item.id} item={item} />)
		         	}
		         </div>
			</div>)
}


export default connect(mapStateToProps)(CollectionPage);