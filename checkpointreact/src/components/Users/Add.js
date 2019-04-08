import React, { Component } from 'react'

class Add extends Component {
  state = {
    name: '',
    age: '',
    last_namep:'',
    last_namem:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Add</h5>
          <div className="input-field">
            <label htmlFor="Nombre">Nombre</label>
            <input type="text" id='name' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="last_namep">Apellido Paterno</label>
            <input type="text" id='last_namep' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="last_namem">Apellido Materno</label>
            <input type="text" id='last_namem' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="age">Edad</label>
            <input type="number" id='age' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">Agregar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Add