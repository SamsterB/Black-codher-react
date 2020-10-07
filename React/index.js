

class ClickButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Nothing here yet! Change this text to add more info.';
    }

    return React.createElement(
      'button', { 
        style: { 
          backgroundColor: "#3392e4", 
          color : "#fff",
          border : "0",
          padding : "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
          fontSize:"1.1em"
        }, 
        onClick: () => this.setState({ clicked: true }) 
      },
      'Click To Reveal'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ClickButton), domContainer);
```