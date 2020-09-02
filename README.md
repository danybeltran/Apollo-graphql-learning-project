### Apollo-graphql learning project

I'm learning Graphql so I created this project that uses the Apollo GraphQL server over express, using an array of users as mock data.

** I will work on a typescript version using more data **

After cloning this repo and running `npm install`

Start the server with `npm run dev`

The Apollo client will start at  [localhost:8080/graphql](localhost:8080/graphql)


\
Project structure:

```
|-- apollo-graphql-crud
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- yarn.lock
    |-- src
        |-- index.js
        |-- mock-data.js
        |-- resolvers
            |-- index.js
            |-- mutations.js
            |-- queries.js

```




#### Queries
Retrieve all users:

```graphql
Query {
    getAll {
        # Fields are id, name and username
        name
        email
    }
}
```

Retrieve one user's information using its id:

```graphql
Query {
    getOne(id:1) {
        name
        email
    }
}
```

#### Mutations

Create a new user
```graphql
Mutation {
    addOne(data:{
        name: "your name",
        email: "your email"
        # id is automatic
    }) 
}
```

Delete a user

```graphql
Mutation {
    # user id
    deleteOne(id:1){
        status
        message
    }
}
```

Update user information

```graphql
Mutation {
    # user id
    updateOne(id:1, data:{
        # not provided fields will have the same value
        name:"new name"
        email:"new username"
    }){
        status
        message
    }
}
```


### That's all, thank you

<center>

![](https://i.redd.it/h2f2fctnyl0z.jpg)

</center>
