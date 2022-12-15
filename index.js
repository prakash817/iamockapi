const jsonSerever = require("json-server") ;
const server = jsonSerever.create() ;
const router = jsonSerever.router("db.json") ;
const middleware = jsonSerever.defaults() ;
const port = process.env.PORT || 3001 ;

server.use(middleware)
server.use(router)

server.listen(port)
