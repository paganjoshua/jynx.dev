package template

import (
	"html/template"
	"io"
	"log"
	"os"
	"path/filepath"
)

type (
	TemplateMap	map[string]*template.Template
	View struct {
		Template	*template.Template
		Title		string
	}
)

var Templates = populateTemplates()

func populateTemplates() map[string]*template.Template {
	const basePath = "assets/templates"
	tmplMap := make(map[string]*template.Template)
	layout := template.Must(template.ParseFiles(basePath + "/_layout.html"))
	template.Must(layout.ParseFiles(basePath + "/_header.html", basePath + "/_footer.html", basePath + "/_error_footer.html", basePath + "/_error_header.html"))
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
