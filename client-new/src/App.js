import './App.css';
import environment from './Environment'
import React from 'react';
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro'
import ListRender from '../src/components/ListRender'

const AppQuery = graphql`
  query AppQuery {
    viewer {
      ...ListRender_list
    }
  }
`

function App() {
  return (
    <div className="App">
      <QueryRenderer 
        environment={environment}
        query={AppQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <ListRender list={props.viewer} />
          }
          return <div>Loading</div>
        }}
      />
    </div>
  );
}

export default App;
