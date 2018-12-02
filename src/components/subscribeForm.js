import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class SubscribeForm extends Component {
  state = {
    email: null,
    message: null,
  }

  handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ message: 'Just a sec...' })
    console.log('submit', this.state)
    addToMailchimp(this.state.email)
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)
        if (result !== 'success') {
          throw msg
        }
        this.setState({ message: msg })
      })
      .catch(err => {
        console.log('err', err)
        this.setState({ message: err })
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Email"
          name="email"
          style={{ minWidth: '300px', marginRight: '0.5rem' }}
        />
        <input type="submit" value="Subscribe" />
        {this.state.message && (
          <span style={{ display: 'block' }}>{this.state.message}</span>
        )}
      </form>
    )
  }
}
