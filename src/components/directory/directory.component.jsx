import React from 'react';
import MenuItem from '../menu-item/menu-item.components';
import {connect} from 'react-redux'; 
import './directory.styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections}  from '../../redux/directory/directory.selectors';
const mapStateToProps =createStructuredSelector({
      sections:selectDirectorySections

})
export const Directory =({sections})=>
	{
		
		// console.log(Object.keys(sections).map((i)=>sections[i].title))
      return(

      	<div className="directory-menu">
            {sections.map(({id,...otherSectionProps})=>(<MenuItem key={id} {...otherSectionProps} />))}
            {/*{Object.keys(sections).map((i)=><MenuItem key={i} id={sections[i].id} title={sections[i].title} imageUrl={sections[i].imageUrl} size={sections[i].size} linkUrl={sections[i].linkUrl} />)} */}
      	</div>
      	)
	}

export default connect(mapStateToProps)(Directory);