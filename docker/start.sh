#! /usr/bin/env sh
set -e

uvicorn api:app --port 8080
