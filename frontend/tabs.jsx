//Make a Tabs component. Root should pass the Tabs
//component an array of Javascript objects that each have title and content as keys.

import React from 'react';
import ReactDOM from 'react-dom';


class Headers extends React.Component {
  render() {
    const selected = this.props.selected;
    const headers = this.props.panels.map((panel, index) => {
      const title = panel.title;
      const klass = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={klass}
          onClick={() => this.props.onTabChosen(index)}>
          {title}{' '}
        </li>
      );
    });
    return (
      <ul className='tab-header'>
        {headers}
      </ul>

    );
 }
}

export default class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0
    };
    this.select = this.select.bind(this);
  }

  select(n) {
      this.setState({selected: n});
  }

  render() {
    const panel = this.props.panels[this.state.selected];
    return (
    <div>
     <h1 className="tabs-label">Tabs</h1>
     <div className='tabs'>
       <Headers
         selected={this.state.selected}
         onTabChosen={this.select}
         panels={this.props.panels}>
       </Headers>
       <div className='tab-content'>
         <article>
           {panel.content}
         </article>
       </div>
     </div>
   </div>
    );
  }
}
