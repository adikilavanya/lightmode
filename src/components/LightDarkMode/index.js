// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}
  onDarkMode = () => {
    this.setSate(priState => ({isDark: !priState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const darkMode = isDark ? 'Dark Mode' : 'Light Mode'
    const {buttonMode} = isDark ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="bg">
        <div className={`${darkMode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onDarkMode}>
            {buttonMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
