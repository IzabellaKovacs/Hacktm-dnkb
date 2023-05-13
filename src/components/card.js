import React, { useState } from 'react';
import {useCollapse} from 'react-collapsed';

export default function Card(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [mail, setMail] = React.useState(localStorage.getItem("mail"));

    const onClick = (account_name) => {
      fetch(`http://localhost:8081/Granted/${mail}/${account_name}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
      }).then((res) => {
        if (res.status === 200) {
          alert("Request sent!");
          // window.location.reload();
        } else {
          alert("Something went wrong,try again!");
          // window.location.reload();
        }
      });
    }
    return(
    <div className="card">
        <h1>{props.name}</h1>
        <button  onClick={(d)=>onClick(props.name)}>Give me the credentials</button>
    </div>
)  
}
