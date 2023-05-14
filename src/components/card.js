import React, { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";

export default function Card(props) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [mail, setMail] = React.useState(localStorage.getItem("mail"));
  const [role, setRole] = React.useState("");

  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:8081/User/${mail}`)
      .then((res) => res.json())
      .then((result) => {
        setRole(result);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:8081/Access/access_role/${mail}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        console.log(result);
      });
  }, []);
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
  };
    
  return (
    <div id={props.id} className="card">

      {products.map((products) => (
        <div className="card--elements">
          <p>{products.account_name}</p>
          <button onClick={(d) => onClick(products.account_name)}>
            Give me the credentials
          </button>
        </div>
      ))}
    </div>
  );
}
