
# SETUP

To setup a local development environment, follow the steps given below.

1. Ensure you have NodeJS, npm installed in your system.
2. Fork and then clone the repository
```bash
$ git clone https://github.com/<your-username>/CA-Website.git
```
3. From the root folder, Install dependencies in `client` folder.
```bash
$ cd client
$ npm i
```
- Start the development client
```bash
$ npm start
```
4. From the root folder, Install dependencies in `server` folder.
```bash
$ cd server
$ npm i
```
- Generate environment variables and fill in the values.
```bash
$ cp .env.sample .env
```
> Your `.env` is ignored by `git`, which you can see in `.gitignore`, and so, it's safe!
- Start the development servers
```bash
$ npm run dev
```

5. At the end of this, you should have
- server running at `http://localhost:8000`
- client running at `http://localhost:3000`

# Folder structure

Our folder structure

```
.
├── client
│   ├── public
│   └── src
│      
└── server
    ├── src
    └── test
    
```

## Bug/ Feature Request

Now that the development environment is all set up, head over to [Contributing](./CONTRIBUTING.md) to learn how to contribute.
