import React from 'react';
import {connect} from 'react-redux';
import './collections-overview.styles.scss';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
//console.log('selectCollectionsForPreview',selectCollectionsForPreview())
const mapStateToProps = createStructuredSelector({
      collections:selectCollectionsForPreview

})
const CollectionsOverview = ({collections}) =>
{
	  return(<div className="collections-overview">
	  	          { collections.map(({id,...otherCollectionProps}) =>
				           {
				           	  console.log( {...otherCollectionProps})
				           	  return <CollectionPreview key={id} {...otherCollectionProps} />
				           })
		       			}
	  	      </div>)

}
export default connect(mapStateToProps)(CollectionsOverview);