package main

import (
	"log"
	"net/http"

	"github.com/paganjoshua/jynx.dev/pkg/server"

)

func main() {
	var s server.Server

	s.NewRouter()

	s.Mux = s.NewMiddleware(&s.Router, s.Gzip)
	log.Println("yo")
	log.Fatal(http.ListenAndServe(":8080", s.Mux)) 
}

