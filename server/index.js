// importing express framework
const express = require("express");

//creating instance of express application
const app = express();

// import the cors[cross origin resource sharing] middleware library
const cors = require("cors");

//import database 
const pool = require("./db");


//middleware
// telling express to use cors middleware
app.use(cors());

// says express to parse[to examine in minute way] json data in request body
// helps in getting data from client side
app.use(express.json());

//ROUTES//

// create a todo
app.post("/todos",async(req,res)=>{
    // await 
    try{
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]);
        
        res.json(newTodo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }
});

// get all todo
app.get("/todos",async(req,res)=>{
    try {
       const allTodos = await pool.query("SELECT * FROM todo");
       res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
    }
});

// get a todo
app.get("/todos/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE t_id = $1",[id]);

        res.json(todo.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

// update a todo
app.put("/todos/:id" , async(req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query
        ("UPDATE todo SET description = $1 WHERE t_id = $2",[description,id]);

        res.json("Todo was updated successfully!!");
        
    } catch (err) {
        console.error(err.message)
    }
} );

//delete a todo
app.delete("/todos/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE t_id = $1" , [id]);

        res.json("Todo was deleted successfully!!");
    } catch (err) {
        console.error(err.message);
    }
});

//start the server
app.listen(5000,()=>{
    console.log("server is running on port 5000");
});