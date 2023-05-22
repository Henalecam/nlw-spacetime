"use strict";
exports.__esModule = true;
require("dotenv/config");
var memories_1 = require("./routes/memories");
var auth_1 = require("./routes/auth");
var upload_1 = require("./routes/upload");
var node_path_1 = require("node:path");
var app = fastify();
app.register(multipart);
app.register(require('@fastify/static'), {
    root: node_path_1.resolve(__dirname, '../uploads'),
    prefix: '/uploads'
});
app.register(cors, {
    origin: true
});
app.register(jwt, {
    secret: 'spacetime'
});
app.register(auth_1.authRoutes);
app.register(upload_1.uploadRoutes);
app.register(memories_1.memoriesRoutes);
app
    .listen({
    port: 3333,
    host: '0.0.0.0'
})
    .then(function () {
    console.log('🚀 HTTP server running on port http://localhost:3333');
});
