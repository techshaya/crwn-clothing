import {connect} from 'react-redux'; //to get access to both selectors and state to determine this component should be loading
import {createStructuredSelector} from 'reselect'; //bcoz we are writing mapStateToProps
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import {compose } from 'redux';
const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
})

const collectionsOverviewContainer =compose(connect(mapStateToProps),WithSpinner) (CollectionsOverview) //compose evaluates from right to left, will evalueate with 
                                              //spinner first by passing collectionsoverview to that  

export default collectionsOverviewContainer ;