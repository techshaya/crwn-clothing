import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionItem from '../../components/collection-item/collection-item.component';
class ShopPage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state ={
			collections : SHOP_DATA
		}
	}
	render()
	{
		const {collections} = this.state;
		return <div className="shop-page">
			          { collections.map(({id,...otherCollectionProps}) =>
				           {
				           	  console.log( {...otherCollectionProps})
				           	  return <CollectionPreview key={id} {...otherCollectionProps} />
				           })
		       			}
			       
			   </div>
	}
}
export default ShopPage;