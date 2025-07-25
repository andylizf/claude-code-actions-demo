// Example file with various issues for Claude to fix

var userData = []  // should use const

// Missing error handling
function fetchUserData(userId) {
    return fetch("/api/users/" + userId)
        .then(res => res.json())
}

// Poor naming and no documentation
function calc(x, y) {
    return x + y
}

/**
 * Retrieves a user by name from the database
 * @param {string} name - The name of the user to retrieve
 * @returns {Promise<Object>} Promise that resolves to user data
 * @throws {Error} When name is invalid or database operation fails
 */
async function getUser(name) {
    try {
        // Input validation
        if (!name || typeof name !== 'string') {
            throw new Error('Invalid input: name must be a non-empty string')
        }
        
        // Trim and validate name length
        const trimmedName = name.trim()
        if (trimmedName.length === 0) {
            throw new Error('Invalid input: name cannot be empty')
        }
        
        if (trimmedName.length > 255) {
            throw new Error('Invalid input: name cannot exceed 255 characters')
        }
        
        // Use parameterized query to prevent SQL injection
        const query = "SELECT * FROM users WHERE name = ?"
        const result = await database.query(query, [trimmedName])
        
        return result
    } catch (error) {
        // Provide meaningful error messages while avoiding information disclosure
        if (error.message.startsWith('Invalid input:')) {
            throw error
        }
        throw new Error('Failed to retrieve user data')
    }
}
