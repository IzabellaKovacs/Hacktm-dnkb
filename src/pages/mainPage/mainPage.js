import React from "react";
import "./mainPage.css";
import Card from "../../components/card";
import NavigationBar from "../../components/navBar";
import { useEffect } from "react";
import CardAdmin from "../../components/cardAdmin";
function Status(props) {
  if (props.role === "ceo" || props.role === "manager") {
    <CardAdmin />;
  } else {
    <Card />;
  }
}
function MainPage() {
  const [products, setProducts] = React.useState([]);
  const [mail, setMail] = React.useState(localStorage.getItem("mail"));
  const [produceToAccept, setProduceToAccept] = React.useState([]);
  const [role, setRole] = React.useState("");

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

  useEffect(() => {
    fetch(`http://localhost:8081/User/${mail}`)
      .then((res) => res.json())
      .then((result) => {
        setRole(result);
      });
  }, []);

  // const RenderAccept = () => {
  //   if (produceToAccept.length > 0) {
  //     return (
  //       <div className="card--elements">
  //         {produceToAccept.map((item) => (
  //           <Card key={item.id} name={item.account.name} />
  //         ))}
  //       </div>
  //     );
  //   } else if (produceToAccept.length === 0 && role === "ceo") {
  //     return (
  //       <div className="card--elements">
  //         <h1>There is no request to accept</h1>
  //       </div>
  //     );
  //   }
  // };

  return (
    <div className="container">
      <NavigationBar />
      {
        // <div className="card--elements">
        //   {products.map((item) => (
        //     <Card />
        //   ))}
        // </div>
        <Status role={role}/>
      }
    </div>
  );
}

export default MainPage;
