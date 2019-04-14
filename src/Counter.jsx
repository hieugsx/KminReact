import React from 'react'

const getValueColor = value => {
    if (value < 0) return 'red'
    if (value > 0) return 'green'
    return 'black'
}

class Counter extends React.Component {
  state = { value: 0, delta: this.props.initialDelta, autoIncreaseOn: true }
  interval = null
    handleValueChange = () => {
        const currentValue = this.state.value
        this.setState({ value: currentValue + this.state.delta})
    }
     handleResetClick = () => {
        this.setState({ value: 0 })
    }
    handleDeltaChange = delta =>
    this.setState({ delta: this.state.delta + delta })

    handleToggleAutoIncrease = () =>{
      this.setState({ autoIncreaseOn: !this.state.autoIncreaseOn},() =>{
          if(this.state.autoIncreaseOn){
            this.interval  = setInterval(()=>{
              this.handleValueChange()},5)
              console.log('a');
          }else{
            clearInterval(this.interval)
        }
      })
    }
    componentDidMount = () => {
      this.interval  = setInterval(()=>{
        this.handleValueChange()},5)
     console.log('a');
    }
    render() {
      console.log('render')
      const {value,delta,autoIncreaseOn} = this.state
      return (
        <div>
          <div>
            Current value: <span style={{ color: getValueColor(value) }}>
              {value}
            </span>
          </div>
          
          <div>
            <button onClick={() => this.handleValueChange(1)}>
              Update
            </button>
          </div>
  
          <div>
            Delta: {delta}
          </div>
          <div>
            <button onClick={()=>this.handleDeltaChange(1)}>
              Increase
            </button>
            <button onClick={()=>this.handleDeltaChange(-1)}>
              Decrease
            </button>
            <button onClick={this.handleToggleAutoIncrease}>
            {autoIncreaseOn ? 'Stop' : 'Start'} Auto Increase
            </button>
          </div>
        </div>
      )
    }
    componentWillUnmount = () => {
      console.log('componentWillUnmount')
      clearInterval(this.interval)
    }
  }
  
  export default Counter