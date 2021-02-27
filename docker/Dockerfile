FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install --no-install-recommends -y python3 python3-pip

RUN python3 -m pip install --no-cache-dir torch==1.7.1+cpu -f https://download.pytorch.org/whl/torch_stable.html && \
    rm -rf /usr/local/lib/python3.8/dist-packages/torch/test && \
    rm -rf ~/.cache/pip/*

COPY docker/requirements.txt ./
RUN python3 -m pip install --no-cache-dir -r ./requirements.txt && \
    rm -rf ~/.cache/pip/*

#    rm -rf /var/lang/lib/python3.8/test && \


COPY server/ /app/
