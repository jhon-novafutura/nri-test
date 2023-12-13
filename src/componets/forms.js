import React, { Component } from 'react';
import './forms.css'
class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Name*',
      email: 'E-mail*',
      phone: 'Phone*',
      subject: 'Subject*',
      message: 'Message*'
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário para o servidor ou realizar outras ações com eles
    console.log(this.state);
  };

  render() {
    const inputStyle = {
      border: 'none',
      borderBottom: '1px solid #fff',
      outline: 'none',
      width: '100%',
    };

    return (
      <div className='flex flex-col justify-center text-center'>
        <h3 className='text-white'>Get In Touch</h3>
        <h5 className='text-white'>Please, fill our form</h5>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              style={inputStyle}
            />
          </div>

          <div>
            <input
              type="text"
              id="subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              rows="4"
              cols="50"
              required
              style={inputStyle}
            />
          </div>

          <div className='flex justify-center'>
            <button type="submit"><p>Send Message</p></button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
