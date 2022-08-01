//Setup routing.
const router = require("express").Router();

//Different routing for either the API or the homepage.
//const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

//Setup routing for each URL.
router.use("/", homeRoutes);
//router.use("/api", apiRoutes);

//Export for use with express.
module.exports = router;