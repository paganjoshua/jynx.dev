##
## Build
##
FROM golang:1.17-buster AS build

WORKDIR /app

COPY go.mod .
#COPY go.sum .

RUN go mod download

COPY cmd/. .

RUN go build -o /wizbiz

FROM gcr.io/distroless/base-debian10

##
## Deploy
##
WORKDIR /

COPY assets/. /assets/
COPY --from=build /wizbiz /wizbiz

EXPOSE 3000

CMD ["/wizbiz"]
