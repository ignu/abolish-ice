import React from "react"
import incidents from "../data/incidents"

class Incident extends React.Component {
  render() {
    return (
      <div className="incident">
        <a href={this.props.url}>{this.props.title}</a>
      </div>
    )
  }
}

class Incidents extends React.Component {
  render() {
    return (
      <div>
        {incidents.map((i, ix) => (
          <Incident key={ix} title={i.title} url={i.url} />
        ))}
      </div>
    )
  }
}
export default Incidents
