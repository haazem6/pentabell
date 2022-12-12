const router = require("express").Router();

const todosControllers = require("../controllers/todosController");

router.post("/add", todosControllers.addTodo);
router.get("/getAll", todosControllers.getAllTodos);
router.delete("/:todoId", todosControllers.deleteTodo);
router.patch("/:todoId", todosControllers.updateTodo);

module.exports = router;