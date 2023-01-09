const express = require("express");
const disrouter = require("./ROUTE/distrirouter");

const app = express();
const port = 4050;

app.use(express.json ());
app.use("/api", disrouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})