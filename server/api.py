import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from ml.generate import get_chapter, get_acrostic, get_horizontal_acrostic
from schemas import GenerateReq
from model_manager import ModelManager

# FastAPI app
app = FastAPI()
app.add_middleware(CORSMiddleware, allow_methods=["*"], allow_headers=["*"], allow_origins=['*'])

# model manager
mm = ModelManager()
mm.load_models(os.environ['MODEL_CONFIG_PATH'])


@app.get("/models")
def list_models():
    return mm.describe_models()


@app.get("/forms")
def list_forms():
    return [
        {
            'id': 'chapter',
            'name': 'פרק'
        },
        {
           'id': 'acrostic',
           'name': 'אקרוסטיכון'
        },
        {
           'id': 'horizontal_acrostic',
           'name': 'אקרוסטיכון אופקי'
        }]


@app.post("/generate")
def generate(req: GenerateReq):

    print(f'Generate: {req.model}/{req.form}/{req.prime}')

    # get model
    mdl = mm.get_model(req.model)

    # check form
    if req.form == 'chapter':

        # gen chapter
        out = get_chapter(mdl, req.prime, 20)

    elif req.form == 'acrostic':

        # gen acrostic
        out = get_acrostic(mdl, req.prime)

    elif req.form == 'horizontal_acrostic':

        # gen horizontal acrostic
        out = get_horizontal_acrostic(mdl, req.prime)

    return {
        "form": req.form,
        "verses": [dict(text=verse) for verse in out.split('\n')]
    }
