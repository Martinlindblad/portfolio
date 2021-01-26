import React, { Component } from "react";
import "../scss/components/japan.scss";
import axios from 'axios';
import Sakura from './sakura';
import sakuraPic from '../media/sakura.png'


class Japan extends Component {

  constructor(props) {
    super(props);
    this.state = { japanInfo: [] };
  }

  componentDidMount() {
    this.getJapan();
  }

  getJapan = async () => {
    try {
      const resp = await axios.get('http://localhost:5000/japan')
      this.setState({ japanInfo: resp.data });
      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  render() {
    return (
      <section className="japan-container">
        <div id="Japanese" className="japan">
          <div className="japan-bg" style={{ backgroundImage: `url(${sakuraPic})` }}></div>
          <div className="japanese-info-container">
            <div className="japanese-info">
              {this.state.japanInfo.map((data, i) => {
                return (
                  i === 0 ?
                    <div className="japan-content">
                      <h2>{data.title}</h2>
                      <p>{data.content}</p>
                    </div>
                    : null
                )
              })}
              <div className="japanese-info">
                {this.state.japanInfo.map((data, i) => {
                  return (
                    i > 0 ?
                      <div className="info-item">
                        <h3>{data.title}</h3>
                        <p>{data.content}</p>
                      </div>
                      : null
                  )
                })}
              </div>
            </div>
          </div>
          <Sakura />
        </div>
      </section>
    )
  }
}
export default Japan


