import { useEffect } from "react";
export default function sendDatas(mail, password) {
 console.log(mail, password);
  fetch(
    `http://localhost:8081/User/validation/${mail}/${password}`,
    {
      method: "GET",
    }
  ).then((res) => {
    if (res.status === 200) {
      //   alert("ok");
      console.log(res.status);
    //   res.json().then((data) => {
    //     localStorage.setItem("user", JSON.stringify(data));
    //   });
    localStorage.setItem("mail", mail);
      window.location.href = "/MainPage";
    } else {
      alert("wrong data!");
      window.location.href = "/";
    }
  });
}