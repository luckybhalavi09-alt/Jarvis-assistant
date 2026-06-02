from flask import Flask, render_template, request, jsonify
import speech_recognition as sr
import pyttsx3
import datetime
import webbrowser
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

engine = pyttsx3.init()
engine.setProperty('rate', 150)
recognizer = sr.Recognizer()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def listen():
    try:
        with sr.Microphone() as source:
            recognizer.adjust_for_ambient_noise(source)
            audio = recognizer.listen(source, timeout=5)
            return recognizer.recognize_google(audio).lower()
    except sr.UnknownValueError:
        return "Sorry, I didn't understand that."
    except sr.RequestError:
        return "Network error. Please check your internet connection."
    except Exception as e:
        return f"Error: {str(e)}"

def process_command(command):
    command = command.lower()
    
    if "time" in command:
        current_time = datetime.datetime.now().strftime("%I:%M %p")
        return f"The current time is {current_time}"
    
    elif "date" in command:
        current_date = datetime.datetime.now().strftime("%A, %B %d, %Y")
        return f"Today is {current_date}"
    
    elif "hello" in command or "hi" in command:
        return "Hello! I'm Jarvis, your AI assistant. How can I help you today?"
    
    elif "how are you" in command:
        return "I'm functioning perfectly! Thank you for asking. How can I assist you?"
    
    elif "open youtube" in command:
        webbrowser.open("https://www.youtube.com")
        return "Opening YouTube for you"
    
    elif "open google" in command:
        webbrowser.open("https://www.google.com")
        return "Opening Google"
    
    elif "open github" in command:
        webbrowser.open("https://www.github.com")
        return "Opening GitHub"
    
    elif "search" in command or "tell me about" in command:
        query = command.replace("search", "").replace("tell me about", "").strip()
        webbrowser.open(f"https://www.google.com/search?q={query}")
        return f"Searching for {query} on the web"
    
    elif "help" in command:
        return """I can help you with:
        - Telling time and date
        - Searching the web
        - Opening websites like Google, YouTube, GitHub
        - General queries and assistance
        Try saying: 'What time is it?' or 'Search for Python'"""
    
    else:
        return f"I'm not sure about '{command}', but I'm learning. Try asking me about the time, date, or to search for something!"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/voice-input', methods=['POST'])
def voice_input():
    try:
        recognized_text = listen()
        response = process_command(recognized_text)
        return jsonify({
            'status': 'success',
            'recognized': recognized_text,
            'response': response
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 400

@app.route('/text-input', methods=['POST'])
def text_input():
    try:
        data = request.json
        user_input = data.get('text', '').strip()
        
        if not user_input:
            return jsonify({
                'status': 'error',
                'message': 'Please enter some text'
            }), 400
        
        response = process_command(user_input)
        return jsonify({
            'status': 'success',
            'recognized': user_input,
            'response': response
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 400

@app.route('/speak', methods=['POST'])
def speak_route():
    try:
        data = request.json
        text = data.get('text', '').strip()
        
        if not text:
            return jsonify({
                'status': 'error',
                'message': 'No text provided'
            }), 400
        
        speak(text)
        return jsonify({
            'status': 'success',
            'message': 'Speech completed'
        })
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 400

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
