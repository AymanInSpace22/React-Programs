const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Change code below this line
ShoppingCart.defaultProps = {items: 0}



{/*
React also has an option to set default props.
You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary.
This allows you to specify what a prop value should be if no value is explicitly provided.
For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco,
unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.
*/}




// Overide Default Props
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>
    { /* Change code above this line */ }
  }
};
