require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const pool = require("./db");
const logger = require("./logger"); 

//middleware
app.use(cors());
app.use(express.json());

// create todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    logger.info(`Created new todo with description: ${description}`); 
    res.json(newTodo.rows[0]);
  } catch (err) {
    logger.error(`Error creating todo: ${err.message}`);
    res.status(500).json({ error: "Server error" });
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    logger.info("Fetched all todos");
    res.json(allTodos.rows);
  } catch (err) {
    logger.error(`Error fetching todos: ${err.message}`); 
    res.status(500).json({ error: "Server error" });
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const aTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    if (aTodo.rows.length === 0) {
      logger.warn(`Todo with ID ${id} not found`); 
      return res.status(404).json({ error: "Todo not found" });
    }
    logger.info(`Fetched todo with ID: ${id}`);
    res.json(aTodo.rows[0]);
  } catch (err) {
    logger.error(`Error fetching todo: ${err.message}`); 
    res.status(500).json({ error: "Server error" });
  }
});

// update todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );
    if (updateTodo.rowCount === 0) {
      logger.warn(`Todo with ID ${id} not found for update`); 
      return res.status(404).json({ error: "Todo not found" });
    }
    logger.info(`Updated todo with ID: ${id}`);
    res.json("Todo was updated");
  } catch (err) {
    logger.error(`Error updating todo: ${err.message}`); 
    res.status(500).json({ error: "Server error" });
  }
});

// delete todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    if (deleteTodo.rowCount === 0) {
      logger.warn(`Todo with ID ${id} not found for deletion`); 
      return res.status(404).json({ error: "Todo not found" });
    }
    logger.info(`Deleted todo with ID: ${id}`);
    res.json(`${id} got deleted`);
  } catch (err) {
    logger.error(`Error deleting todo: ${err.message}`); 
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`); 
});
