#! /usr/bin/env sh
set -e

uvicorn api:app --host 0.0.0.0 --port 8080
