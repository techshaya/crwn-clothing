import React,{useEffect} from 'react';
import {connect} from 'react-redux'; 
import {Route} from 'react-router-dom';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';
// import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
//import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import collectionsOverviewContainer  from '../../components/collections-overview/collections-overview.container';
//import CollectionPage from '../collection/collection.component'; 
import collectionPageContainer from '../collection/collection.container';
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// const mapDispatchToProps = (dispatch)=>({
// 	updateCollections:collectionsMap =>
// 	    dispatch(updateCollections(collectionsMap))})


const ShopPage =({fetchCollectionsStart,match})=>
{
	useEffect(() => {
		fetchCollectionsStart()
	}, [fetchCollectionsStart])

		
		
		 return( <div className="shop-page">
			          <Route exact path={`${match.path}`}  component={collectionsOverviewContainer} />
			          <Route path={`${match.path}/:collectionId`} component={collectionPageContainer}/>
			       
			   </div>) 
		
		
	
        
		
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () =>
    dispatch(fetchCollectionsStart())
});
export default connect(
null,
  mapDispatchToProps
)(ShopPage);