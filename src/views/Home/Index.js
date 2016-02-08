import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as calculatorActions } from 'redux/modules/calculator'
import TigerImage from 'static/Tiger.png'
import classes from 'styles/HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  result: state.result
})
export class Index extends React.Component {
  static propTypes = {
    result: PropTypes.number.isRequired,
    addition: PropTypes.func.isRequired,
    subtraction: PropTypes.func.isRequired,
    multiplication: PropTypes.func.isRequired,
    division: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-5">
            <img className={classes.tiger}
              src={TigerImage}
              alt="Tiger Image"
            />
          </div>
        </div>
        <h1>Welcome to use this simple calculator</h1>
        <h2>
          Simple Calculator:
        </h2>
        <h3>
          <span id="lastResult" className={classes['last-result']}>0</span>
          &nbsp;&nbsp;
          <span id="operator" className={classes.operator}>?</span>
          &nbsp;&nbsp;
          <span id="newNumber" className={classes['new-number']}>0</span>
          &nbsp;&nbsp;
          {' = '}
          &nbsp;&nbsp;
          <span className={classes['result--green']}>{this.props.result}</span>
        </h3>
        <br/> <br />
        <input id="number" className="input input-default" placeholder="Input Number" />
        {' '}
        <button className="btn btn-default"
          onClick={() => {
            const number = parseFloat(document.getElementById('number').value)
            document.getElementById('lastResult').textContent = this.props.result
            document.getElementById('operator').textContent = '+'
            document.getElementById('newNumber').textContent = number
            this.props.addition(number)
          } }
        >
          {"+"}
        </button>
        {' '}
        <button className="btn btn-default"
          onClick={() => {
            const number = parseFloat(document.getElementById('number').value)
            document.getElementById('lastResult').textContent = this.props.result
            document.getElementById('operator').textContent = '-'
            document.getElementById('newNumber').textContent = number
            this.props.subtraction(number)
          } }
        >
          {"-"}
        </button>
        {' '}
        <button className="btn btn-default"
          onClick={() => {
            const number = parseFloat(document.getElementById('number').value)
            document.getElementById('lastResult').textContent = this.props.result
            document.getElementById('operator').textContent = '*'
            document.getElementById('newNumber').textContent = number
            this.props.multiplication(number)
          } }
        >
          {"*"}
        </button>
        {' '}
        <button className="btn btn-default"
          onClick={() => {
            const number = parseFloat(document.getElementById('number').value)
            document.getElementById('lastResult').textContent = this.props.result
            document.getElementById('operator').textContent = '/'
            document.getElementById('newNumber').textContent = number
            this.props.division(number)
          } }
        >
          {"/"}
        </button>
        <hr />
        <Link to="/About">Go to About Page</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, calculatorActions)(Index)
