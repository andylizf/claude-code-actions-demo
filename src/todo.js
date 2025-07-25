// Simple TODO management system
// This file has intentional issues for Claude to fix

var todos = []  // should use const

// Add todo without validation
function addTodo(text) {
    todos.push({
        id: Date.now(),
        text: text,
        completed: false
    })
}

// Delete todo without checking if exists
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id != id)  // should use ===
}

// Toggle completion status
function toggleTodo(id) {
    for (var i = 0; i < todos.length; i++) {  // should use const
        if (todos[i].id == id) {  // should use ===
            todos[i].completed = !todos[i].completed
            break
        }
    }
}

// Get all todos - missing error handling
function getTodos() {
    return todos
}

// TODO: Add input validation
// TODO: Add error handling
// TODO: Add persistence to localStorage
