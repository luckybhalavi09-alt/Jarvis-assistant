# Jarvis - AI Assistant 🤖

एक आधुनिक **AI Assistant** जो voice और text commands को समझता है और respond करता है। Google Assistant की तरह काम करता है!

## Features ✨

- 🎤 **Voice Input** - माइक्रोफोन से commands लें
- 💬 **Text Input** - टाइप करके commands दें
- 🔊 **Text-to-Speech** - Assistant आपके सवालों का जवाब बोलकर दे
- 🌐 **Web Interface** - Beautiful और user-friendly UI
- ⏰ **Time & Date** - समय और तारीख बताता है
- 🔍 **Web Search** - Google पर सर्च करता है
- 🌍 **Open Websites** - YouTube, GitHub, Google खोल सकता है

## Installation 📥

### Requirements:
- Python 3.8+
- Microphone (voice input के लिए)
- Internet connection

### Setup करने के steps:

1. **Repository को clone करें:**
```bash
git clone https://github.com/luckybhalavi09-alt/Jarvis-assistant.git
cd Jarvis-assistant
```

2. **Virtual Environment बनाएं:**
```bash
python -m venv venv

# Windows में:
venv\Scripts\activate

# Mac/Linux में:
source venv/bin/activate
```

3. **Dependencies install करें:**
```bash
pip install -r requirements.txt
```

4. **Application चलाएं:**
```bash
python app.py
```

5. **Browser में खोलें:**
```
http://localhost:5000
```

## कैसे Use करें? 🎯

### Voice Commands:
1. **🎤 Voice Input** button पर click करें
2. माइक्रोफोन में clearly बोलें
3. Jarvis सुनेगा, समझेगा और जवाब देगा

### Text Commands:
1. Input box में अपना सवाल type करें
2. **📤 Send** button दबाएं या Enter दबाएं
3. Jarvis आपको जवाब देगा

## Example Commands 💡

```
"What time is it?" - समय बताता है
"What's today's date?" - आज की तारीख बताता है
"Hello Jarvis" - Greeting
"Open YouTube" - YouTube खोलता है
"Open Google" - Google खोलता है
"Search for Python" - Google पर सर्च करता है
"Help" - सभी commands की list दिखाता है
```

## Project Structure 📁

```
Jarvis-assistant/
├── app.py                 # Main Flask application
├── templates/
│   └── index.html        # Web interface
├── requirements.txt      # Python dependencies
├── .env                  # Environment configuration
└── README.md            # Documentation
```

## Technology Stack 🛠️

- **Backend:** Flask (Python web framework)
- **Frontend:** HTML, CSS, JavaScript
- **Voice Recognition:** SpeechRecognition library (Google API)
- **Text-to-Speech:** pyttsx3
- **Web Server:** Flask built-in server

## Troubleshooting 🔧

### Microphone काम नहीं कर रहा?
- Windows: Settings → Privacy & Security → Microphone (enable करें)
- Mac: System Settings → Privacy → Microphone (allow करें)
- Linux: `sudo apt install pulseaudio` 

### "Network error" मिल रहा है?
- Internet connection check करें
- Google के बिना permission error हो सकता है

### Port 5000 already in use है?
```bash
# Different port पर चलाएं:
python app.py
# फिर config में port change करो
```

## Features जो Add किए जा सकते हैं 🚀

- ⛅ Weather updates
- 🧮 Calculator
- ⏰ Reminders & Alarms
- ✅ To-do list
- 📧 Email भेजना
- 📰 News updates
- 🎵 Spotify integration
- 🏠 Smart home control

## License 📜

यह project open-source है।

## Author 👨‍💻

**luckybhalavi09-alt** - Jarvis Assistant Creator

---

## Support 💬

अगर कोई problem हो तो GitHub issues में report करें!

**Happy Coding! 🎉**
