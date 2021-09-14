package middleware

import (
	"compress/gzip"
	"io"
	"log"
	"net/http"
	"strings"
	
)

type (
	gzipware struct {
		Middleware
	}
)

func (m *Middleware) Gzip() Linker {
	w := &gzipware{}
	w.Log = "gzip"
	return w
}

func (m *gzipware) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	encodings := r.Header.Get("Accept-Encoding")
	if !strings.Contains(encodings, "gzip") {
		log.Println("yo")
		m.Next.ServeHTTP(w, r)
		return
	}
	log.Println(m.Log)
	w.Header().Add("Content-Encoding", "gzip")
	gzipwriter := gzip.NewWriter(w)
	defer gzipwriter.Close()
	grw := gzipResponseWriter{
		ResponseWriter: w,
		Writer:		gzipwriter,
	}
	m.Next.ServeHTTP(grw, r)
}

type gzipResponseWriter struct {
	http.ResponseWriter
	io.Writer
}

func (gzw gzipResponseWriter) Write(data []byte) (int, error) {
	return gzw.Writer.Write(data)
}
