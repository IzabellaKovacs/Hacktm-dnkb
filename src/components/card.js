import React, { useState } from 'react';
import {useCollapse} from 'react-collapsed';

export default function Card(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
    return(
    <div className="card">
        <h1>{props.name}</h1>
        <button {...getToggleProps()}>Give me the credentials</button>
        <div {...getCollapseProps()}>
          {/* <input>Email</input>
          <input>Password</input> */}
          <button>Log in</button>
        </div>
    </div>
)  
}
