##
## React
##
FROM node:lts-buster as react

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client .

RUN npm run build

##
## Build
##
FROM golang:1.17-buster AS build

WORKDIR /app

COPY go.mod .
COPY go.sum .

RUN go mod download

COPY . .

RUN 	useradd -M -s /usr/bin/nologin jynx && \
	CGO_ENABLED=0 go build -o /wizbiz cmd/main.go

##
## Deploy
##
FROM scratch

WORKDIR /

COPY --from=build /etc/passwd /etc/passwd

COPY --from=build /etc/group /etc/group

COPY --from=build /app/assets/. /assets/

COPY --from=react /app/client/dist /client/dist/

COPY --from=build /wizbiz /wizbiz

USER jynx

EXPOSE 3000

CMD ["/wizbiz"]
