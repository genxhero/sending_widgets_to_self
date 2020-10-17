import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Sound from 'react-sound';

const panels = [
  {title: 'whiskey', content: 'Bourbon, scotch, irish, Japanese, sour mash'},
  {title: 'wine', content: 'pinot noir, cabernet, merlot, chianti'},
  {title: 'rum', content: 'Captain Morgan, Bacardi, Kraken'}
];


function Root() {
  return(
    <div className="main-container">
      <Clock />
      <div className='interactive'>
        <Tabs panels={panels} />
      </div>
      <div>
        <button className="tell-me" onClick={ () => console.log("tell me more, tell me more") } >Tell Me More!</button>
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('root'));
});

  //  <AutoComplete names={names} />
