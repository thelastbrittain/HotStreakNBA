# Commands to initialize client

- Navigate to root folder (not client)
- Create react app with ts: **npx create-react-app client --template typescript**
- In client/package.json, add <"proxy": "http://localhost:3001",> below name and version. This will allow connecting to server port
- - Note, this is only when connecting to the server and is unneccesary if the whole application is in client.
- Navigate to client: **cd client**
- Run the program **npm start**
