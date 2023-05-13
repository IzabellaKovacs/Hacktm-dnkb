import React from "react";
import "./mainPage.css";
import Card from "../../components/card";
import NavigationBar from "../../components/navBar";
import { useEffect } from "react";


function MainPage() {
  const [products, setProducts] = React.useState([]);
  const [mail, setMail] = React.useState(localStorage.getItem("mail"));
const [produceToAccept, setProduceToAccept] = React.useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:8081/Access/access_role/${mail}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        console.log(result);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8081/Granted/toAccept/${mail}`)
      .then((res) => res.json())
      .then((result) => {
        setProduceToAccept(result);
        console.log(result);
      });
  }, []);
  
  return (
    <div className="container">
      <NavigationBar />
      <div className="card--elements">
        {products.map((item) => (
          <Card key={item.id} name={item.account. name} />
        ))}
      </div>

      <div className="card--elements">
        {produceToAccept.map((item) => (
          <Card key={item.id} name={item.account. name + " test"} />
        ))}
        </div>  

    </div>
  );
}

export default MainPage;
