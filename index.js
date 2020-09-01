const express = require('express');
const Hubs = require('./hubs/hubs-model.js');

// ROUTERS
const hubsRouter = require('./hubs/hubs-router.js');
const productsRouter = require('./products/products-router.js');

// SERVER
const server = express();

// ABLE TO READ JSON
server.use(express.json());

// CONSUMING ROUTERS BASED ON URL REQUESTS
server.use('/api/hubs', hubsRouter);//for urls beginning with /api/hubs use the hubsRouter
server.use('/api/products', productsRouter);


server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});



// server.get("/clients", handler);
// server.post("/clients", handler);
// server.put("/clients/:id", handler);
// server.delete("/clients/:id", handler);

// server.get("/suppliers", handler);
// server.post("/suppliers", handler);
// server.put("/suppliers/:id", handler);
// server.delete("/suppliers/:id", handler);

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
