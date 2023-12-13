import React, { Component } from 'react';
import './contacts.css';


class Contacts extends Component {
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
      
      outline: 'none',
      width: '100%',
    };

    return (
      <div className='flex flex-col justify-center text-center bg-white sm:p-16 p-8'>
        <h3 className=''>Get In Touch</h3>
        <h5 className='font-medium'>Please, fill our form</h5>
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
          <div className='text-left font-semibold'>
            <p>
            * Required fields
            </p>
          </div>
          <div className='flex flex-col justify-center pt-10 '>
            <button type="submit"><p>Send Message</p></button>
          </div>
        </form>
      </div>
    );
  }
}

export default Contacts;
