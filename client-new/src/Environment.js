const {
    Environment,
    Network,
    RecordSource,
    Store,
} = require('relay-runtime')

const store = new Store(new RecordSource())

const network = Network.create(async (operation, variables) => {

    const response = await fetch('http://localhost:4000/graphql', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              query: operation.text,
              variables,
          }),
      })
    return await response.json()
})

const environment = new Environment({
network,
store,
})

export default environment
