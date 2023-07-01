from typing import Union
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI(title="swoofqer-be")

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:4200"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

@app.get("/")
def read_root():
  return {"status": "online"}

@app.get("/courses")
def read_root():
  file = open('courses.json')
  return json.load(file)
