"use strict";
exports.__esModule = true;
require("dotenv/config");
var memories_1 = require("./routes/memories");
var auth_1 = require("./routes/auth");
var app = fastify();
app.register(multipart);
app.register(cors, {
    origin: true
});
app.register(jwt, {
    secret: 'spacetime'
});
app.register(auth_1.authRoutes);
app.register(memories_1.memoriesRoutes);
app
    .listen({
    port: 3333,
    host: '0.0.0.0'
})
    .then(function () {
    console.log('🚀 HTTP server running on port http://localhost:3333');
});
