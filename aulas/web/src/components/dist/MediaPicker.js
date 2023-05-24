'use client';
"use strict";
exports.__esModule = true;
exports.MediaPicker = void 0;
var react_1 = require("react");
function MediaPicker() {
    var _a = react_1.useState(null), preview = _a[0], setPreview = _a[1];
    function onFileSelected(event) {
        var files = event.target.files;
        if (!files) {
            return;
        }
        var previewURL = URL.createObjectURL(files[0]);
        setPreview(previewURL);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { onChange: onFileSelected, type: "file", name: "coverUrl", id: "media", accept: "image/*", className: "invisible h-0 w-0" }),
        preview && (
        // eslint-disable-next-line
        React.createElement("img", { src: preview, alt: "", className: "aspect-video w-full rounded-lg object-cover" }))));
}
exports.MediaPicker = MediaPicker;
