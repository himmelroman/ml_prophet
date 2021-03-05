from pydantic import BaseModel


class GenerateReq(BaseModel):
    model: str
    form: str
    prime: str
