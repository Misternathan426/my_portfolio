document.addEventListener('DOMContentLoaded', () => {
// Dark mode toggle mode
const darkToggle = document.getElementById('dark_toggle');
    if (darkToggle) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            darkToggle.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            darkToggle.textContent = '🌙';
        }
// Stays When you reload the website
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
    } else {
        console.error("Dark Mode Toggle Buttom not found!");
    }
});



// Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () =>{
            navLinks.classList.remove('show');
        });
    });
}

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// find the button and window
const chatBtn = document.getElementById("chat-btn");
const chatWindow = document.getElementById("chat-window");

// when button clicked → show/hide chat
chatBtn.addEventListener("click", () => {
    if (chatWindow.style.display === "none") {
      chatWindow.style.display = "block"; // show
    } else {
      chatWindow.style.display = "none"; // hide
    }
});


// bot auto reply
function getBotReply(userMsg) {
    userMsg = userMsg.toLowerCase();

    if (userMsg.includes('hello') || userMsg.includes('hi')) {
        return 'Hey there 👋';
    }
    else if (userMsg.includes('how are you')) {
        return "I'm just code, but I'm doing great! 😀";
    }
    else if (userMsg.includes('bye')) {
        return 'Goodbye! 👋 Have a nice day!';
    }
    else if (userMsg.includes('name')) {
        return "I'm your freindly chat bot 🤖";
    }
    else {
        return "Hmm... I'm not sure about that 🤔";
    }
}

const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');


function sendMessages() {
    const msg = userInput.value.trim();
    if (msg) {
        // create new messages
        const newMsg = document.createElement("div");
        newMsg.classList.add("message", "user");
        newMsg.textContent = msg;
        messages.appendChild(newMsg);

        // clear input
        userInput.value = "";

        //auto scroll to buttom
        messages.scrollTop = messages.scrollHeight;

        // show typing indicator
        const typingMsg = document.createElement('div');
        typingMsg.classList.add('message', 'bot');
        typingMsg.textContent = "Bot is typing...";
        messages.appendChild(typingMsg)

        messages.scrollTop = messages.scrollHeight;

        //bot reply after 1 second
        setTimeout(() => {
            // remmove typing indicator
            typingMsg.remove();

            //show reply
            const botMsg = document.createElement("div");
            botMsg.classList.add("message", "bot")
            botMsg.textContent = getBotReply(msg);
            messages.appendChild(botMsg);

            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }
}



// Send n button click
sendBtn.addEventListener('click', sendMessages);

// Send to Enter key press
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        sendMessages();
    }
});


