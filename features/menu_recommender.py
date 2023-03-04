import numpy as np
import pandas as pd
import re
import cohere
from sklearn.metrics.pairwise import cosine_similarity

api_key = 'r7tQM9FKfSccYZYJjeeNNvyFj2LFUZwmtXhUChzn'
co = cohere.Client(api_key)

def get_similarity(target,candidates):
    candidates = np.array(candidates)
    target = np.expand_dims(np.array(target),axis=0)

    similarity_scores = cosine_similarity(target,candidates)
    similarity_scores = np.squeeze(similarity_scores).tolist()

    similarity_scores = list(enumerate(similarity_scores))
    similarity_scores = sorted(similarity_scores, key=lambda x:x[1], reverse=True)

    return similarity_scores

'''def category(idx)
    cate_dict={0:[0,5],1:[6,15],2:[16,21],3:[22,34]}
    if idx in range(0,6):
        return 0
    
    elif idx in range(6,16):
        return 1
    
    elif idx in range(16,22):
        return 2
    else:
        return 3'''
    
def recommender(READING_IDXs):
    idx=READING_IDXs[0]
    df = pd.read_csv('menu_recommender.csv', delimiter=',')
    items = df['Description'].tolist()

    output = co.embed(
            model ='large',
            texts = items)
    embeds = output.embeddings

    reading = embeds[idx]
    similarity = get_similarity(reading,embeds)
    print('Target:')
    print(df['Name'][idx])

    print('Recommendation:')
    for i in similarity[1:4]:
        print(df['Name'][i[0]])

    print()

    
prev_food=[1,19]
recommender(prev_food)