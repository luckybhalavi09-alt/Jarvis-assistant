// Initialize Speech Recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Set Hindi language
recognition.lang = 'hi-IN';
recognition.continuous = false;
recognition.interimResults = true;

// Variables
let isListening = false;

// Start Listening
function startListening() {
    isListening = true;
    document.getElementById('listening-status').textContent = '🎤 Sunning... Hindi mein bolein...';
    document.getElementById('listening-status').style.color = '#ff6b6b';
    document.getElementById('mic-btn').disabled = true;
    document.getElementById('stop-btn').disabled = false;
    recognition.start();
}

// Stop Listening
function stopListening() {
    isListening = false;
    recognition.stop();
    document.getElementById('listening-status').textContent = 'Click button ko press kren aur Hindi mein bolein...';
    document.getElementById('listening-status').style.color = '#667eea';
    document.getElementById('mic-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
}

// Handle Speech Recognition Results
recognition.onresult = (event) => {
    let interimTranscript = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
        } else {
            interimTranscript += transcript;
        }
    }

    if (finalTranscript) {
        processCommand(finalTranscript.trim());
    }
};

// Handle Recognition Errors
recognition.onerror = (event) => {
    document.getElementById('listening-status').textContent = '❌ Error: ' + event.error;
    document.getElementById('listening-status').style.color = '#ff6b6b';
    document.getElementById('mic-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
};

// Handle Recognition End
recognition.onend = () => {
    document.getElementById('mic-btn').disabled = false;
    document.getElementById('stop-btn').disabled = true;
};

// Process Commands
function processCommand(command) {
    const cmd = command.toLowerCase().trim();
    document.getElementById('user-input').textContent = command;

    let response = '';

    // Command matching
    if (cmd.includes('samay') || cmd.includes('time')) {
        const now = new Date();
        const time = now.toLocaleTimeString('hi-IN');
        response = `Abhi samay hai: ${time}`;
    } 
    else if (cmd.includes('tarikh') || cmd.includes('date')) {
        const now = new Date();
        const date = now.toLocaleDateString('hi-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        response = `Aaj ki tarikh hai: ${date}`;
    }
    else if (cmd.includes('naam') || cmd.includes('name')) {
        response = 'Mera naam Jarvis hai. Aapka naam kya hai?';
    }
    else if (cmd.includes('namaste')) {
        response = 'Namaste! Main Jarvis hoon. Aapki kya madad kar sakta hoon?';
    }
    else if (cmd.includes('hello') || cmd.includes('hi')) {
        response = 'Hello! Main Jarvis hoon aapka voice assistant. Kya main aapki madad kar sakta hoon?';
    }
    else if (cmd.includes('kaun ho') || cmd.includes('who are you')) {
        response = 'Main Jarvis hoon, ek Hindi voice assistant. Main aapko time, date, aur aur bhi kayi cheezen bataa sakta hoon.';
    }
    else if (cmd.includes('shukriya') || cmd.includes('thank you')) {
        response = 'Aapka swagat hai! Kya aur kuch kaam hai?';
    }
    else {
        response = `Aapne kaha: "${command}". Mujhe samajh nahi aaya. Kripaya phir se koshish kijiye.`;
    }

    // Display response
    document.getElementById('jarvis-response').textContent = response;
    
    // Speak response
    speakResponse(response);
    
    // Update status
    document.getElementById('listening-status').textContent = '✅ Command processed!';
    document.getElementById('listening-status').style.color = '#51cf66';
}

// Text to Speech
function speakResponse(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
}

// Initialize
document.getElementById('stop-btn').disabled = true;
