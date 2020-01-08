import React from "react";
import { useAuth } from "../../shared/context/auth-context"

/*
function xxxx (){
const update = FormData => {
    return updateTable(FormData).catch(error => {
      console.log(error.response.status)
    });
  };
 mesas=update
array=[mesa, state , list , time]


for (let index = 0; index < mesas.length; index++) {
  foreach(array as component){
    let com= document.getElementById(`${component}${index}`) 
com.innerHTML=mesas[index][component]
  }
  
}

 
}  

*/
function Tables() {
  const { updateTable } = useAuth();

  const update = FormData => {
    return updateTable(FormData).catch(error => {
      console.log(error.response.status)
    });
  };
  return (
    <li>
      <h1 className="content" id="table">
        1
      </h1>
      <button className="content" id="state">
        Libre
      </button>
      <ul className="order" id="list">
        <li>Hamburguesa con Chocolate</li>
        <li>Pizza con Piña</li>
        <li>Foundant de Alcachofa</li>
      </ul>
      <p className="content" id="time">18:39</p>
    </li>
  );
}


export default Tables;
