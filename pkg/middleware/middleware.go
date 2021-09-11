package middleware

import (
	"log"
	"net/http"
)

type (
	Ware struct {
		Next http.Handler
		Log  string
	}
)

var Middleware = middleware(One, Two)

func middleware(chain ...*Ware) http.Handler {
	for i := 0; i < len(chain) - 1; i++ {
		chain[i].Next = chain[i + 1]
	}
	chain[len(chain) - 1].Next = http.DefaultServeMux
	return chain[0]
}

func (m *Ware) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	log.Println(m.Log)
	m.Next.ServeHTTP(w, r)
}
