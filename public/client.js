/**
 * Front-End Client Script for Express Game Server
 * By MrBisquit (https://github.com/MrBisquit)
 * License: MIT
 * Repository: https://github.com/MrBisquit/Express-Game-Server/
 */

// EGS = Express Game Server
// Structure for EGS for ease of access
const EGS = {
    Initialise,
    CheckConnection
}

// The list of Errors, their meanings and their display names, codes, etc...
const Errors = {
    100 : {
        // This will occur when the server is either just not online or the connection is too slow to be able to connect
        message : "Failed to connect to the server",
        code : "FAILED_TO_CONNECT"
    },
    101 : {
        // This will occur when the client either disconnects from the internet or the server goes offline
        message : "Lost connection to the server",
        code : "LOST_CONNECTION"
    },
    102 : {
        // This will occur when the client disconnects (Usually from the user choosing to leave)
        message : "Client disconnected",
        code : "CLIENT_DISCONNECTED"
    },
    103 : {
        // This will occur when the server didn't like the connection so refused it
        message : "Server refused connection",
        code : "SERVER_REFUSED_CONNECTION"
    }
}

// Functions

// Run when the client wants to start to connect
// Acts as a sequence of events to get ready for a server - client connection
// Should be the first thing that is run, as other functions will most likely fail without initialisation beforehand
const Initialise = () => {

}

// Allow for checking the connection of the server
// (Checking if it's available for a connection)
const CheckConnection = () => {
    // You'll most likely see errors 100 and 103 coming from this function as it checks the server availability
}