let userRole = "admin"
let isAuthenticated = true
let userAge =21
function authenticateUser(role, authenticated, age){
    if(role == "admin"){
        console.log("Please log in")
    }
    else if( role == "admin" && authenticated){
        console.log("Welcome to the Dashboard")
    }
    else if(authenticated){
        console.log("access Denied")
    }
}
authenticateUser(userRole, isAuthenticated, userAge)
