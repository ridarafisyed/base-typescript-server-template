import express from "express"

const app = express()

const hostname = "127.0.0.1";
const port = 8000;

app.get("/", (req, res) => { res.send("Hello World") })

app.listen(port, hostname, () => {
    console.log(`App is running at http://${hostname}:${port}/`)
})