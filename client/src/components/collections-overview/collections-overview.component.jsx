import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {CollectionsOverviewContainer} from './collections-overview.styles';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }  
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections : selectCollectionsForPreview
  });

export default connect(mapStateToProps)(CollectionsOverview);