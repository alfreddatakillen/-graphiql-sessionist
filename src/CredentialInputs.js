import React, { Component } from 'react';

class CredentialInputs extends Component {
    constructor(props) {
      super(props);
      this.state = {
        keyId: window.localStorage.getItem('keyId') || '',
        secretKey: window.localStorage.getItem('secretKey') || ''
      };
    }

    render() {
        return <span className="sessionist">
            <label>Key ID:</label> <input type="text" value={this.state.keyId} onChange={event => { window.localStorage.setItem('keyId', event.target.value); this.setState({ keyId: event.target.value })}} />
            <label>Secret key:</label> <input type="text" value={this.state.secretKey} onChange={event => { window.localStorage.setItem('secretKey', event.target.value); this.setState({ secretKey: event.target.value })}} />
        </span>
    }
}

export default CredentialInputs;
