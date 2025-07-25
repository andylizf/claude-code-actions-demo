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

// Security issue - SQL injection vulnerability
function getUser(name) {
    const query = "SELECT * FROM users WHERE name = " + name
    return database.query(query)
}
