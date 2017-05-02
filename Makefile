BASEDIR=$(CURDIR)
OUTPUTDIR=$(BASEDIR)/_book

GITHUB_PAGES_BRANCH=master

help:
	@echo 'Makefile for Light Xue\'s personal wiki                                   '
	@echo '                                                                          '
	@echo 'Usage:                                                                    '
	@echo '   make init                           initialize wiki evironment         '
	@echo '   make html                           (re)generate the web site          '
	@echo '   make clean                          remove the generated files         '
	@echo '   make publish                        generate using production settings '
	@echo '   make serve [PORT=4000]              serve site at http://localhost:8000'
	@echo '   make github                         upload the web site via gh-pages   '
	@echo '                                                                          '
	@echo '                                                                          '

init:
	sudo npm -g install gitbook-cli
	sudo apt-get install -y ghp-import

html:
	gitbook build

clean:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)

serve:
ifdef PORT
	gitbook serve --port $(PORT)
else
	gitbook serve
endif

publish:
	[ ! -d $(OUTPUTDIR) ] || rm -rf $(OUTPUTDIR)
	gitbook build

github: publish
	ghp-import -m "Generate Gitbook site" -b $(GITHUB_PAGES_BRANCH) $(OUTPUTDIR)
	git push origin $(GITHUB_PAGES_BRANCH)

.PHONY: html help clean serve github
