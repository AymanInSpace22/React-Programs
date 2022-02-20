class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));








// Another example. Made from scratch!

// Change code below this line
class MyComponent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
