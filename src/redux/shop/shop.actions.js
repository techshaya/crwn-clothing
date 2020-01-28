import {UPDATE_COLLECTIONS} from './shop.constants';

export const updateCollections = (collectionsMap)=>
{
	return({
		type:UPDATE_COLLECTIONS,
         payload: collectionsMap
	})
     
}