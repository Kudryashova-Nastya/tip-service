FROM python:3.8

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1

RUN mkdir -p /usr/src/app  # создаём родительскую папку

WORKDIR /usr/src/app

COPY req.txt /usr/src/req.txt
RUN pip3 install -r /usr/src/req.txt

COPY . /usr/src/app
RUN python3 ./manage.py makemigrations
RUN python3 ./manage.py migrate
