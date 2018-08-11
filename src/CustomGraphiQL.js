import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import './CustomGraphiQL.css';
import sessionistHeader from 'sessionistheader';
import CredentialInputs from './CredentialInputs';

let graphiql;
let credentialinputs;

class CustomGraphiQL extends Component {

  fetcher(graphQLParams) {
    //return fetch(window.location.origin + '/graphql', {

    const url = 'http://localhost:4000/graphql';
    const path = url.replace(/^[^/]*\/[^/]*\/[^/]*\//, '/');
    const method = 'POST';
    const body = JSON.stringify(graphQLParams);
    const date = new Date().toUTCString();


    if (credentialinputs.state.keyId === '') {

      return fetch('http://localhost:4000/graphql', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body
      }).then(response => response.json());
    
    }

    return sessionistHeader(credentialinputs.state.keyId, credentialinputs.state.secretKey, method, path, body, date)
    .then(auth => fetch(url, {
      method,
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
        'X-Date': date
      },
      body
    }))
    .then(response => response.json());
  }

  render() {
    return (
      <GraphiQL ref={c => { graphiql = c; }} fetcher={graphQLParams => this.fetcher(graphQLParams)}>
        <GraphiQL.Toolbar>
          <GraphiQL.ToolbarButton
            onClick={(event) => graphiql.handlePrettifyQuery(event)}
            title="Prettify Query (Shift-Ctrl-P)"
            label="Prettify"
          />
          <GraphiQL.ToolbarButton
            onClick={(event) => graphiql.handleToggleHistory(event)}
            title="Show History"
            label="History"
          />

          <CredentialInputs ref={c => { credentialinputs = c; }} />

        </GraphiQL.Toolbar>
      </GraphiQL>
    );
  }
}

export default CustomGraphiQL;
