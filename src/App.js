import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ul>
      {
        friends.map(friend =><li>{friend}</li>)

      }
      
      </ul>

      <ol>

      {
        products.map(product=><li>{product.name}</li>)
      }
      </ol> 

      
     

        <Person name={friends[0]} job="App Developer" age="28"></Person>
        <Person name={friends[1]} job="Electronics Engineer" age="27"></Person>
        <Person name={friends[2]} job=" Web Designer" age="24"></Person>
        <Person name="Mahfuz Alam" job="Web Developer" age="25"></Person>
        <Person name="Taki Kauser" job="FullStack Developer" age="26"></Person>
        <Person name="Rafsan Faruk" job="Designer" age="26"></Person>
        <Person name="Tkr Chamak" job="Content Writer" age="25"></Person>
        
        
        <Counter></Counter>
        <Users></Users>


        {
          products.map(pd=><Product product={pd}></Product>)
        }

        

        
  

        {/*
          <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product>
        <Product product={products[4]}></Product>
        <Product product={products[5]}></Product>
      */}
        
      </header>
    </div>
  );
}


const friends=['Masum Reza','Ahmed Hridoy','Dolar Mahamud','khairul islam','Parvez','Sumon','Monirzaman','kasuer Ali','Ariful','Mohiuddin'];


function Person(props){
  let personStyle = {
    backgroundColor: "white",
    border: "4px solid white",
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    color: "black",
    width: "400px",
  };

  /*Console.log(props)*/
  return (
    <div style={personStyle}>
      <h1>Name:{props.name}</h1>
      <h2>Job:{props.job}</h2>
      <h3>Age:{props.age}</h3>
    </div>
  );
}
const products=[{name:'Laptop',price:'$500'},{name:'Mobile',price:'$200'},{name:'Tablet',price:'$300'},{name:'watch',price:'$50'},{name:'TV',price:'$1000'},{name:'AC',price:'$5000'},{name:'Washing Mechine',price:'$1000'},{name:'Room Heater',price:'$400'}];

function Counter(){
  const [count,setCount]=useState(0);
  const handleIncrease=()=>setCount(count+1);
  return(

    <div>
    <h3>Count:{count}</h3>
    <button style={{width:'150px',height:'80px',padding:'10px',fontSize:'20px',marginRight:'10px'}} onClick={handleIncrease}>Increase</button>

    <button onClick={()=>setCount(count-1)} style={{width:'150px',height:'80px',padding:'10px',fontSize:'20px'}}>Decrease</button>
  
  
  </div>

  )
  
}

function Users(){
  const [users,setUsers]=useState([0]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    
      <div>
      <h3>Dynamics Data:{users.length}</h3>
      
        <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
        
        </ul>
      

      </div>
    
  )
}

function Product(props) {

  const productStyle = {
    border: "5px solid tomato",
    backgroundColor: "lightGray",
    borderRadius: "5px",
    float: "left",
    width: "400px",
    height: "250px",
    margin:'10px',
    padding:'10px',
    textAlign:'center',
    color:'black'
  };

  const {name,price}=props.product;

  return(
    <div style={productStyle}>
    <h2>Name:{name}</h2>
    <h2>Price:{price}</h2>
    <button>Buy Now</button>
  </div>

  )
  
}

export default App;
