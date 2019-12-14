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
          		id: 1
    		},

        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }]
      }
    }
	render()
	{
		const {sections} = this.state;
		// console.log(Object.keys(sections).map((i)=>sections[i].title))
      return(

      	<div className="directory-menu">
            {Object.keys(sections).map((i)=><MenuItem key={i} id={sections[i].id} title={sections[i].title} imageUrl={sections[i].imageUrl} size={sections[i].size} />)}
      	</div>
      	)
	}
}
export default Directory;