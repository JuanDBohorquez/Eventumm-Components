import { css } from "lit-element";

export default css `

.card {
    background-image: linear-gradient(to bottom, black, gray);
    color: white;
}

.card2 {
    background-color: white;
    color: black;

    
}

header{
    background-color: rgb(0, 0, 0); 
    align-items: center; 
    padding: 20px; 
    width: 550px; 
    border-bottom-right-radius: 60px 50px; 
}
  

.contenedor{ 
    background-color: rgb(0, 0, 0); 
    padding: 1px; 
    width: 500px; 
    border-bottom-right-radius: 240px; 
    border-top-left-radius: 10%; 
    border-bottom-left-radius: 10%; 
  
  } 

  .logo { 
    height: 60px; 
    display: flex; 
    justify-content: flex-start;    
    margin-right: 10px; 
    border-radius: 200%; 
  } 

  .logo img{ 
    margin-top: -10px; 
    margin-left: -10px; 
    height: 80px; 
    border-radius: 100%; 
  } 

`