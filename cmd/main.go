package main

import (
	"io"
	"log"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", homeHandler)
	log.Fatal(http.ListenAndServe(":3000", nil))
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	home, err := os.Open("assets/html/index.html")
	if err != nil {
		log.Fatal(err)
	}
	defer home.Close()
	io.Copy(w, home)
}
