const express = require("express");
const routes = express.Router();

const PostControllers = require("./Controllers/PostagensControllers")

routes.get("/" , PostControllers.index);
routes.get("/:id" ,PostControllers.show);
routes.post("/" , PostControllers.create);
routes.put("/:id" , PostControllers.update);
routes.delete("/:id" , PostControllers.destroy);

module.exports = routes;