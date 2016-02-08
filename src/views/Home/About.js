import React from 'react'
import { Link } from 'react-router'

export class About extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <h1>This is About page!</h1>
        <hr />
        <Link to="/">Click to back to Homepage</Link>
      </div>
    )
  }
}

export default About
