Blog
====

Blog is a simple blog web application.

## Required Software

* _Node.js (7.10.0)_
* _MySQL (5.7.18)_

## Usage

Create the `.env` file with secrets and parameters for all the components.

```bash
# Database
BLOG_DATABASE_DIALECT=the dialect of the database management engine
BLOG_DATABASE_NAME=the name of the database
BLOG_DATABASE_USER=the user of the database with write permissions
BLOG_DATABASE_PASSWORD=his pasword

# Server
BLOG_SERVER_PORT=the port to use by the server

# Session
BLOG_SESSION_SECRET=session secret to use with cookies

# scrypt
BLOG_SCRYPT_MAXTIME=how much scrypt will spend computing the key

# Default Users
BLOG_ADMIN_PASSWORD=administrator password
BLOG_USER_PASSWORD=test user password
```

Install dependencies, ensure the database system is running, and start the
server.

```bash
npm install # to install dependencies
npm start   # to start the server
```

Note that the `scrypt` is a native Node.js module. A C++ compiler is required
to build the library.

## Credits

Toksaitov Dmitrii Alexandrovich (<dmitrii@toksaitov.com>)

