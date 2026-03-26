import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from fastapi import FastAPI

from app.api.v1.routes_reel import router as reel_router

app = FastAPI(title="AI Reel Studio")

app.include_router(reel_router, prefix="/api/v1")


@app.get("/")
def root():
    return {"message": "AI Reel Studio Running"}
