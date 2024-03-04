FROM python:3.11
ENV PYTHONUNBUFFERED=1
WORKDIR /backend

RUN pip install pipenv
COPY Pipfile* /backend/
RUN pipenv lock
RUN pipenv run pip freeze > requirements.txt
RUN pip install -r requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY server /backend/