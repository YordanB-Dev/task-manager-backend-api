const express = require(`express`);
const app = express();
const taskRoutes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
    res.send('Welcome in backend server!');
});

app.use(errorHandler);

module.exports = app;