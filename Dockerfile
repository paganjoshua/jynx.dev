##
## Build
##
FROM golang:1.17-buster AS build

WORKDIR /app

COPY go.mod .
#COPY go.sum .

RUN go mod download

COPY cmd/. .

RUN 	useradd -M -s /usr/bin/nologin jynx && \
	CGO_ENABLED=0 go build -o /wizbiz

##
## Deploy
##
FROM scratch

WORKDIR /

COPY --from=build /etc/passwd /etc/passwd

COPY --from=build /etc/group /etc/group

COPY assets/. /assets/

COPY --from=build /wizbiz /wizbiz

USER jynx

EXPOSE 3000

CMD ["/wizbiz"]
