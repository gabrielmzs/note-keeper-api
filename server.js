
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const porta = process.env.PORT | 3000;

server.listen(porta, () => {
    console.log('JSON Server is running')
})