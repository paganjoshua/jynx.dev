package router

import (
	"net/http"

	"github.com/paganjoshua/jynx.dev/pkg/template"

	"github.com/julienschmidt/httprouter"
)

type Router struct {
	Handler		http.Handler
	Templates	template.TemplateMap
}

func (r *Router) NewRouter() {
	r.Templates = template.Templates

	router := httprouter.New()
	router.GET("/", r.HandleHome)
	router.GET("/about", r.HandleAbout)
	router.GET("/system", r.HandleSystem)
	router.ServeFiles("/client/*filepath", http.Dir("client"))
	router.ServeFiles("/css/*filepath", http.Dir("assets/css"))

	r.Handler = router
}

func (rtr Router) HandleHome(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	var home template.View
	home.Template = rtr.Templates["home.html"]
	home.Title = "Home"

	home.Template.Execute(w, home)
}

func (rtr Router) HandleAbout(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	var home template.View
	home.Template = rtr.Templates["about.html"]
	home.Title = "About"

	home.Template.Execute(w, home)
}

func (rtr Router) HandleSystem(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	var home template.View
	home.Template = rtr.Templates["system.html"]
	home.Title = "System"

	home.Template.Execute(w, home)
}
