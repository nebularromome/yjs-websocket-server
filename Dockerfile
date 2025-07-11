FROM node:18-alpine
WORKDIR /app
RUN npm install -g @y/websocket-server
EXPOSE 1234
CMD ["y-websocket", "--port", "1234"]
