const app = require("./app");
const port = process.env.PORT || 10000;

app.set("port", port);
app.listen(port);

console.log(`Server listening on port ${port}`);
