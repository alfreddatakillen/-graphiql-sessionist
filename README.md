# GraphiQL-Sessionist

GraphiQL with support for the [Sessionist Authorization HTTP Header](https://github.com/houseagency/sessionistheader).

Built static version of the site is in the build/ directory.
It is build to be statically hosted from the `/graphiql` URL on your domain, with the GraphQL endpoint at `/graphql`.

## Example usage

Using express' `.static()`:

```
const app = express();
app.use('/graphql', graphql.middleware);
app.use('/graphiql', express.static(__directory + '/node_modules/graphiql-sessionist/build'));
```

## How to build

```
npm i -D yarn
node_modules/.bin/yarn
node_modules/.bin/yarn build
```


