import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className={"card" + (this.props.words === "kill" ? " bg-danger" : this.props.words === "animal" ? " bg-warning" : "")} style={{
                width: "18rem",
                color: this.props.color
            }}>
              <img src={this.props.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Words: {this.props.words}</h5>
                <p className="card-text">{this.props.text}</p>
              </div>
              <ul className={"list-group list-group-flush" + (this.props.words === "kill" ? " bg-danger" : this.props.words === "animal" ? " bg-warning" : "")}>
                  <li className={"list-group-item" + (this.props.words === "kill" ? " bg-danger" : this.props.words === "animal" ? " bg-warning" : "")}>Time: {this.props.time}</li>
                  <li className={"list-group-item" + (this.props.words === "kill" ? " bg-danger" : this.props.words === "animal" ? " bg-warning" : "")}>Latitude: {this.props.position.lat}</li>
                  <li className={"list-group-item" + (this.props.words === "kill" ? " bg-danger" : this.props.words === "animal" ? " bg-warning" : "")}>Longitude: {this.props.position.lng}</li>
              </ul>
              <div className="card-body">
                <a href={`https://www.google.com/maps/@${this.props.position.lat},${this.props.lng},14z`} className="card-link">Maps Link</a>
              </div>
            </div>
        )
    }
}
