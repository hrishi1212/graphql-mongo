# GraphQl-MongoDB

## Background information

### run

- edit /config/default.json
- provide mongodb connection path [mongodb://localhost:27017/assignment by default]
- npm install
- npm start

### added /countries endpoint

- `/users`
- `/apartments`
- `/locations`
- `/countries`
- `/graphql`
- `/graphiql`

## What I did

1. I have added new endpoint /countries by creating new service countries.

1. I have added countries to graphql endpoint which can be accessible by using
   for single country : `query RootQuery($id: String) { country(_id: $id) { title } }`   
   for multiple country :`query RootQuery($country: String) { countries(country: $country) { total items { title } } }`

1. I have added country to location schema, to show country details in location, which can be accessible by using   
   for multiple : `query RootQuery($active: Boolean) { locations(active: $active) { total items { title country{ title } } } }`

1. I have also added functionality to use limit and skip param in GraphQl resolvers, which can access by passing limit and skip as param, I also handled edge cases.

1. If you run the following query, location will always be `null`. Please figure out why this is happening.
   After you found out how this happens, please describe the reason and how you found the issue.

```query RootQuery($owner: String) {
      apartments(owner: $owner) {
        items {
          location {
            title
          }
        }
      }
    }
```

For the last point, when I checked the empty response was coming from the location method, in the apartment.resolver file. At the time when I was running query, every time it used to give me an empty array, I found that the instance we are passing as a param of Location was a model I removed { query: { \_id: apartment.location } } and made it to { \_id: apartment.owner } at that time it started giving me the data in response.  also, it could be one of the features of feathersjs hook methods.
