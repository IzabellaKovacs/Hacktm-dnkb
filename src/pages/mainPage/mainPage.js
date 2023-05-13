import React from "react";
import "./mainPage.css";
import Card from "../../components/card";
import NavigationBar from "../../components/navBar";
import { useEffect } from "react";

// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
//   { title: 'samsung', id: 4 },
//   { title: 'xiaomi', id: 5 },
// ];

function MainPage() {
  const [products, setProducts] = React.useState([]);
  const [mail, setMail] = React.useState(localStorage.getItem("mail"));

  

  useEffect(() => {
    fetch(`http://localhost:8081/Access/access_role/${mail}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
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
    </div>
  );
}

export default MainPage;
