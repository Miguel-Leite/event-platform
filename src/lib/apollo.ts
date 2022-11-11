import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clad1f70d0ty301ul6oelfmaw/master',
    cache: new InMemoryCache()
});