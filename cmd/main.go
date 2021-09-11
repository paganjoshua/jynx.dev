package main

import (
	"html/template"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/paganjoshua/jynx.dev/pkg/middleware"
)

type (
	view struct {
		template	*template.Template
		Title		string
	}
)

var templates map[string]*template.Template 

func main() {
	templates = populateTemplates()
	http.HandleFunc("/", handleHome)
	one := &middleware.Ware{Log: "one"}
	two := &middleware.Ware{Log: "two"}
	chain := []*middleware.Ware{one, two}
	log.Fatal(http.ListenAndServe(":3000", middleware.Middleware(chain...)))
}

func populateTemplates() map[string]*template.Template {
	const basePath = "assets/templates"
	tmplMap := make(map[string]*template.Template)
	layout := template.Must(template.ParseFiles(basePath + "/_layout.html"))
	template.Must(layout.ParseFiles(basePath + "/_header.html", basePath + "/_footer.html"))
	contentPath := filepath.Join(basePath + "/content")
	log.Println(contentPath)
	dir, err := os.ReadDir(contentPath)
	if err != nil {
		log.Fatal(err)
	}
	for _, f := range dir {
		filePath := filepath.Join(contentPath + "/" + f.Name())
		file, err := os.Open(filePath)
		if err != nil {
			log.Fatal(err)
		}

		content, err := io.ReadAll(file)
		if err != nil {
			log.Fatal(err)
		}
		file.Close()

		tmpl := template.Must(layout.Clone())
		_, err = tmpl.Parse(string(content))
		if err != nil {
			log.Fatal(err)
		}

		tmplMap[f.Name()] = tmpl
	}
	return tmplMap
}

func handleHome(w http.ResponseWriter, r *http.Request) {
	var home view
	home.template = templates["home.html"]
	home.Title = "Home"


	home.template.Execute(w, home)
}
