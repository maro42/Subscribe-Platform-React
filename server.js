const { createProxyMiddleware } = require("http-proxy-middleware");
const next = require("next");
const express = require("express");

const serverURL = "http://localhost:8080";  // 테스트

const proxy = {
    "/api" : {
        target : serverURL,
        pathRewrite : {"^/api" : "/api"},
        changeOrigin : true,
    }
}

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({
    dev,
});

const handle = app.getRequestHandler();

app
.prepare()
.then(() => {
    const server = express();

    Object.keys(proxy).forEach(function(context) {
        server.use(createProxyMiddleware(context, proxy[context])); 
    });

    server.all("*", (req, res) => {
        handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on port ${port} [${process.env.NODE_ENV}]`);
    });
})
.catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
    process.exit(1);
});