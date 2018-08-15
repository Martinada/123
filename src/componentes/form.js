import React, { Component } from 'react';
import '../estilos/form.css';

function validate(name, email, info) {

  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }

  if (email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (email.split('').filter(x => x === '@').length !== 1) {
    errors.push("Email should contain a @");
  }
  if (info.length < 6) {
    errors.push("You didn't ask us anything!");
  }

  return errors;
}

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      info: '',

      errors: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, info } = this.state;

    const errors = validate(name, email, info);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>

        <h1>Get in touch!</h1>

        <form className = "formulario" onSubmit={this.handleSubmit}>
          {errors.map(error => (
            <p key={error}>Error: {error}</p>
          ))}
          <div className = "smaller">
          <input className = "datos" value={this.state.name} onChange={evt => this.setState({ name: evt.target.value })}
            type="text" placeholder="Name"/>
          <input className = "datos" value={this.state.email} onChange={evt => this.setState({ email: evt.target.value })}
            type="text" placeholder="Email"/>
          </div>
          <input className = "help" value={this.state.password} onChange={evt => this.setState({ info: evt.target.value })}
            type="text" placeholder="How can we help you?"/>

          <button type="button" className="btn btn-primary submit" type="submit" data-toggle="modal" data-target="#exampleModal">
              Send</button>

        </form>

        <div className = "modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className = "modal-dialog" role="document">
            <div className = "modal-content">
              <div className = "modal-header">
                <h5 className = "modal-title" id="exampleModalLabel">Your contact info has been perfectly send!</h5>
              </div>
              <div className = "modal-body">
                You'll hear from us very soon!
              </div>
              <div className = "modal-footer">
                <button type="button" className = "btn btn-secondary close" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}
export default Form;
