module.exports = (app) => {
    app.use("/marvel", require("./hero"));
};