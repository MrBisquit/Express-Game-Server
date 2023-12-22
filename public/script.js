let messages = document.getElementById("messages");

(() => {
    const begin = () => {
        UpdateMessages("Starting client script..."); // Announce that it is starting
    }

    const UpdateMessages = (newMessage) => {
        messages.innerHTML += "<br>" + newMessage;
    }

    // Wait for it to load
    setTimeout(() => { messages = document.getElementById("messages"); begin() }, 5);
})();