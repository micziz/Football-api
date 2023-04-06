const app = require('express')();

app.get("/api/v1/:league/:club", async (req, res) => {
    const dataImport = await import(`./data/${req.params.league}/${req.params.club}.js`)
    res.json(dataImport["default"])
})

app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: __dirname })
})

app.listen(3000);

module.exports = app
