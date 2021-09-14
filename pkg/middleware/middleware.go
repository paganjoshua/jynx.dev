package middleware

import (
	"net/http"

	"github.com/paganjoshua/jynx.dev/pkg/router"
)

type (
	Middleware struct {
		Next http.Handler
		Log  string
	}
	Linker interface {
		Link(http.Handler)
		ServeHTTP(http.ResponseWriter, *http.Request)
	}
)

func (m *Middleware) NewMiddleware(s *router.Router, chain ...func() Linker) http.Handler {
	b := s.Handler
	for i := len(chain) - 1; i >= 0; i-- {
		a := chain[i]()
		a.Link(b)
		b = a
	}
	return b
}

func (w *Middleware) Link(ch http.Handler) {
	w.Next = ch
}
