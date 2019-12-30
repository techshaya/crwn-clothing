import React,{Component} from 'react';
import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';
class Directory extends Component{
    constructor()
    {
    	super();
    	this.state={
    		  sections:[
    		{
    			title: 'hats',
          		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          		id: 1,
              linkUrl:'hats'
    		},

        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl:''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl:''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl:''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl:''
        }]
      }
    }
	render()
	{
		const {sections} = this.state;
		// console.log(Object.keys(sections).map((i)=>sections[i].title))
      return(

      	<div className="directory-menu">
            {this.state.sections.map(({id,...otherSectionProps})=>(<MenuItem key={id} {...otherSectionProps} />))}
            {/*{Object.keys(sections).map((i)=><MenuItem key={i} id={sections[i].id} title={sections[i].title} imageUrl={sections[i].imageUrl} size={sections[i].size} linkUrl={sections[i].linkUrl} />)} */}
      	</div>
      	)
	}
}
export default Directory;