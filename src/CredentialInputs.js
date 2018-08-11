import React, { Component } from 'react';

class CredentialInputs extends Component {
    constructor(props) {
      super(props);
      this.state = {
        keyId: '',
        secretKey: ''
      };
    }

    render() {
        return <span className="sessionist">
            <label>Key ID:</label> <input type="text" value={this.state.keyId} onChange={event => this.setState({ keyId: event.target.value })} />
            <label>Secret key:</label> <input type="text" value={this.state.secretKey} onChange={event => this.setState({ secretKey: event.target.value })} />
        </span>
    }
}

export default CredentialInputs;