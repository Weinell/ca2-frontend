For this project we decided it would be fun to have Chuck Norris' name replaced by an animal's name in a Chuck Norris joke.

For this to happen, we fetched data from these two API's that we found online: https://api.chucknorris.io/jokes/random https://zoo-animal-api.herokuapp.com/animals/rand

We implemented a future, that calls both of these API's, and creates an unprotected endpoint on our server located at: https://weinell.dk/ca2/api/jokeanimal

However, for this to happen, we had to populate our backend servers using this API endpoint with hard-coded users: https://weinell.dk/ca2/api/info/populate

The above mentioned endpoint will not work, unless we drop the databases, so it will result in a 500 error for you.

We used the start code from the school which gave us an endpoint to login, located at: https://weinell.dk/ca2/api/login

