FROM node:slim

LABEL "version"="development"
LABEL "repository"="https://github.com/ddudooo/json-webhook"
LABEL "homepage"="https://github.com/ddudooo/json-webhook"
LABEL "maintainer"="Jung doo <igoa.work@gmail.com>"
LABEL "com.github.actions.name"="Json Webhook"
LABEL "com.github.actions.description"="Curl Content-type/json data"
LABEL "com.github.actions.icon"="message-square"
LABEL "com.github.actions.color"="gray-dark"

COPY . .

RUN npm install --production

ENTRYPOINT ["node", "/lib/main.js"]
