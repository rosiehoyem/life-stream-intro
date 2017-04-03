import os
import pandas as pd
import numpy as np
from flask import Flask, request, session, g, redirect, url_for, abort, \
     render_template, flash, json
# import flask_pymongo 
# import logging
# from logging.handlers import FileHandler, Formatter

app = Flask(__name__) # create the application instance :)

app.config.from_object(__name__) # load config from this file , property_investor.py

app.config.update(dict(
    SECRET_KEY='development key'
))
app.config.from_envvar('LIFE_STREAM_INTRO_SETTINGS', silent=True)

def get_barchart_data():
    filename = os.path.join(app.static_folder, 'barchart.json')
    with open(filename) as file: 
        data = json.loads(file.read())
    return data

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/results')
def results():
    barchart_data = get_barchart_data()
    return render_template('results.html', barchart_data=barchart_data)



