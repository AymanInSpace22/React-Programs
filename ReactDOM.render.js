const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line

// 1st argument is always the JSX component you want to render
// 2nd argument is the DOM. You can use the getElementById to choose a specific Id
ReactDOM.render(JSX, document.getElementById("challenge-node"));
