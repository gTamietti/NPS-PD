import streamlit as st
import nltk 
from nltk.sentiment.vader import SentimentIntensityAnalyzer

nltk.download('vader_lexicon')
s = nltk.SentimentIntensityAnalyzer()
score = s.polarity_scores(input_user)

if score == 0:
    st.write("Neutral")
elif score("neg") !=0:
    st.write("Negative")
elif score("pos") !=0:
    st.write("Positive")

