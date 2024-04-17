from flask import Flask, request, jsonify
from textblob import TextBlob
from googletrans import Translator
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")

translator = Translator()

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    comment = data['comment']
    
    translated_comment = translator.translate(comment, src='pt', dest='en').text
    
    blob = TextBlob(translated_comment)
    polarity = blob.sentiment.polarity
    
    if polarity > 0:
        sentiment = 'Positivo'
    elif polarity < 0:
        sentiment = 'Negativo'
    else:
        sentiment = 'Neutro'
    
    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
