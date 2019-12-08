import datetime
import json

from TwitterSearch import *


DAYS = 2


def tweeter_search(keywords=None, language=None):
    if keywords is None:
        keywords = []
    if language is None:
        language = 'en'
    try:
        tso = TwitterSearchOrder()
        tso.set_keywords(keywords)
        tso.set_language(language)
        tso.set_include_entities(False)
        now = datetime.datetime.now()
        tso.set_since(datetime.date(now.year, now.month, now.day) - datetime.timedelta(days=DAYS))

        with open('twitter_keys.json') as keys:
            twitter_secrets = json.load(keys)

        ts = TwitterSearch(
            consumer_key=twitter_secrets['consumer_key'],
            consumer_secret=twitter_secrets['consumer_secret'],
            access_token=twitter_secrets['access_token'],
            access_token_secret=twitter_secrets['access_token_secret']
         )

        for tweet in ts.search_tweets_iterable(tso):
            print('{} ({}) at {} tweeted: {}'.format(tweet['user']['screen_name'], tweet['id'], tweet['created_at'], tweet['text']))


    except TwitterSearchException as e:
        print(e)


tweeter_search(['#IWish'], 'en')
