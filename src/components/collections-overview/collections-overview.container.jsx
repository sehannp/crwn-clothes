
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

//export const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))


export default CollectionOverviewContainer;