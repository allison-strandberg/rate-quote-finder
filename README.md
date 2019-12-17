# rate-quote-finder
React + Redux web application for finding mortgage rate quotes

## How to run
Clone the repo, and in the rate-quote-app directory, run
```
npm install
```

An API key is required to run the app but is not included in this repository.
To add it back, create a file rate-quote-app/src/authKey.js with the following line, setting the constant to a valid key for the provided endpoint.
```
export const authkey = "YOUR AUTH KEY HERE";
```

Launch the app with
```
npm start
```

or run tests with 
```
npm test
```

## Tools used
* React
* Redux
* [gitignore.io](https://www.gitignore.io/) for generating a .gitignore file
* [.gitmessage template](https://jbt.github.io/markdown-editor/) by Matt Sumner at Thoughbot to encourage verbose commit messages. 