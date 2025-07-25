// Simple TODO management system
// This file has intentional issues for Claude to fix

const todos = []  // Fixed: use const instead of var

/**
 * Adds a new todo item to the list
 * @param {string} text - The text content of the todo item
 * @throws {Error} When text is not provided or is not a string
 * @returns {Object} The created todo item
 */
function addTodo(text) {
    // Input validation
    if (!text || typeof text !== 'string') {
        throw new Error('Todo text must be a non-empty string')
    }
    
    if (text.trim().length === 0) {
        throw new Error('Todo text cannot be empty or just whitespace')
    }
    
    const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
    }
    
    todos.push(newTodo)
    return newTodo
}

/**
 * Deletes a todo item by ID
 * @param {number} id - The ID of the todo item to delete
 * @throws {Error} When id is not provided or is not a number
 * @returns {boolean} True if todo was found and deleted, false otherwise
 */
function deleteTodo(id) {
    // Input validation
    if (id === undefined || id === null) {
        throw new Error('Todo ID must be provided')
    }
    
    if (typeof id !== 'number') {
        throw new Error('Todo ID must be a number')
    }
    
    const initialLength = todos.length
    todos.splice(0, todos.length, ...todos.filter(todo => todo.id !== id))  // Fixed: use strict equality
    return todos.length < initialLength
}

/**
 * Toggles the completion status of a todo item
 * @param {number} id - The ID of the todo item to toggle
 * @throws {Error} When id is not provided or is not a number
 * @returns {boolean} True if todo was found and toggled, false otherwise
 */
function toggleTodo(id) {
    // Input validation
    if (id === undefined || id === null) {
        throw new Error('Todo ID must be provided')
    }
    
    if (typeof id !== 'number') {
        throw new Error('Todo ID must be a number')
    }
    
    for (let i = 0; i < todos.length; i++) {  // Fixed: use let instead of var
        if (todos[i].id === id) {  // Fixed: use strict equality
            todos[i].completed = !todos[i].completed
            return true
        }
    }
    return false  // Todo not found
}

/**
 * Returns a copy of all todo items
 * @returns {Array} Array of todo items (defensive copy)
 */
function getTodos() {
    try {
        // Return a defensive copy to prevent external modification
        return todos.map(todo => ({ ...todo }))
    } catch (error) {
        throw new Error(`Failed to retrieve todos: ${error.message}`)
    }
}

// TODO: Add input validation
// TODO: Add error handling
// TODO: Add persistence to localStorage
