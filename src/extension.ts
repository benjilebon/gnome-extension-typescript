const { St, Clutter } = imports.gi
// @ts-ignore
const Main = imports.ui.main

let panelButton: any;

// @ts-ignore
function init() {
    panelButton = new St.Bin({
        style_class : "panel-button"
    });
    let panelButtonText = new St.Label({
        text: "Hello world",
        y_align: Clutter.ActorAlign.CENTER
    });
    panelButton.set_child(panelButtonText)
}

// @ts-ignore
function enable() {
	log(`Hello log`);
    Main.panel._rightBox.insert_child_at_index(panelButton, 0);
}

// @ts-ignore
function disable() {
    Main.panel._rightBox.remove_child(panelButton);
}