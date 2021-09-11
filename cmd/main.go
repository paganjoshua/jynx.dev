package main

import (
	"log"
	"net/http"

	"github.com/paganjoshua/jynx.dev/pkg/middleware"
	"github.com/paganjoshua/jynx.dev/pkg/template"
)

type (
	Server struct {
		Templates	template.TemplateMap
		Middleware	http.Handler
	}
)

func main() {
	Server := Server{
		Templates: template.Templates,
		Middleware: middleware.Middleware,
	}
	http.HandleFunc("/", Server.handleHome)
	log.Fatal(http.ListenAndServe(":3000", Server.Middleware)) 
}


func (s *Server) handleHome(w http.ResponseWriter, r *http.Request) {
	var home template.View
	home.Template = s.Templates["home.html"]
	home.Title = "Home"


	home.Template.Execute(w, home)
}
