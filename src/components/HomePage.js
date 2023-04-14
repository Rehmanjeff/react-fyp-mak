
import React from 'react';
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import Widgets from '../Widgets';

import '../App.css';

export default function HomePage() {
    return (
      <div>
        <Sidebar /> 
        <Feed /> 
        <Widgets /> 
      </div> 
    );
  }