import React from 'react';
import {DirectoryMenuContainer} from './directory.styles';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';


const Directory = ({sections}) =>  (
      <DirectoryMenuContainer>
        {sections.map(({ id, ...othersectionProps }) => (
          <MenuItem key={id} {...othersectionProps}/>
        ))}
      </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);