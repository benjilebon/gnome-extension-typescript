#!make

.DEFAULT_GOAL := install build deploy

EXT_UUID := $(shell cat src/metadata.json | node_modules/.bin/json uuid)

install:
	@yarn install

build:
	@yarn tsc

deploy:
	mkdir -p $(HOME)/.local/share/gnome-shell/extensions/$(EXT_UUID)
	cp target/* $(HOME)/.local/share/gnome-shell/extensions/$(EXT_UUID)
	cp src/metadata.json $(HOME)/.local/share/gnome-shell/extensions/$(EXT_UUID)