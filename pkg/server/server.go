package server

import (
	"net/http"
	"github.com/paganjoshua/jynx.dev/pkg/middleware"
	"github.com/paganjoshua/jynx.dev/pkg/router"
)

type Server struct {
	Mux		http.Handler
	middleware.Middleware
	router.Router
}
