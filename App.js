import React from "react";
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];


// comment this out after completion and uncomment code below it to proceed
/*
function Child() {
  return <div>This is children content</div>;
}
*/
/**
  Challenge: Uncomment this code to complete quiz
*/
function Child({value, onUpdateParent}) {
  return (
    <>
      <div>Child</div>
      <button onClick={onUpdateParent}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  function handleClick() {
    setValue("Updated from child")
  }

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child 
          value={value}
          onUpdateParent={handleClick}
        />
      </div>
    </>
  );
}


// Comment out after completion
/*
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
      <Child />
    </div>
  );
}
*/
// Comment above code after completion

function App() {
  const [toggle, setToggle] = React.useState(true); 

  function handleClick(){
    //console.log(!toggle)
    setToggle(!toggle)
  }

  return (
    
    <>
    <h1>JSX is cool!</h1>
    <img src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"  alt="logo" />
      <h3>User names</h3>
      <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
      <button onClick={handleClick}>Hide Element Below</button>

      <div>{toggle ? "Toggle Challenge" : " "}</div>
      <Parent>
      <Child />
    </Parent>
    </>
  );
}

export default App;
