
const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
    res.json({message: 'ok'});
});

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})