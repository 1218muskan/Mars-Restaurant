import nltk
from nltk.corpus import wordnet
from nltk.tokenize import word_tokenize
import pandas as pd
import string

def recommend_dish(text):
    text = text.translate(str.maketrans('', '', string.punctuation))
    words = word_tokenize(text.lower())

    dishes=list()
    with open('foods.txt', 'r') as file:
        for line in file:
            dishes.append(line.strip())

    food_words = set()
    for word in words:
        if word in dishes:
            food_words.add(word)

    df = pd.read_csv('menu_recommender.csv', delimiter=',')

    dish_names = list()

    for i in food_words:
        for j in range(len(df)):
            if i in df.loc[j,'Description']:
                dish_names.append(df.loc[j,'Name'])

    return dish_names

text="I love to cook and experiment with different recipes. My favorite dishes are pasta, pizza, and sushi"

print(recommend_dish(text))
