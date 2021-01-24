import React, { Component } from "react";
import '../scss/components/sakura.scss'

class Sakura extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sakura: false,
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.sakuraFall();
    }, 38000);
  }

  sakuraFall() {
    this.setState({ sakura: Math.random() });
  }


  
  render() {
        var numRand = Array.from({ length: 60 }, () => Math.floor(Math.random() * 60).toString());;

    return (
      <section key={this.state.sakura} className="sakura-container">
        {numRand.map((xPos, key) => {
          return (
            <div style={{ right: xPos + '%' }} key={key} className="sakura-leaf"></div>
          )
        })}

      </section>
    )
  }
}
export default Sakura


