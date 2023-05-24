"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var NewMemoryForm_1 = require("@/components/NewMemoryForm");
function NewMemory() {
    return (React.createElement("div", { className: "flex flex-1 flex-col gap-4 p-16" },
        React.createElement(link_1["default"], { href: "/", className: "flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100" },
            React.createElement(lucide_react_1.ChevronLeft, { className: "h-4 w-4" }),
            "Voltar para a home"),
        React.createElement("form", { className: "flex flex-1 flex-col gap-2" },
            React.createElement("div", { className: "flex items-center gap-4" },
                React.createElement("label", { htmlFor: "media", className: "flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100" },
                    React.createElement(Camera, { className: "h-4 w-4" }),
                    "Anexar m\u00EDdia"),
                React.createElement("label", { htmlFor: "isPublic", className: "flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100" },
                    React.createElement("input", { type: "checkbox", name: "isPublic", id: "isPublic", value: "true", className: 'h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 ' }),
                    "Tornar mem\u00F3ria p\u00FAblica")),
            React.createElement("input", { type: "file", id: "media", className: "invisible h-0 w-0" }),
            React.createElement("textarea", { name: 'content', spellCheck: false, className: 'w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0', placeholder: 'Escreva sua mem\u00F3ria... Fique livre para adicionar fotos, v\u00EDdeos e relatos sobre essa experi\u00EAncia que voc\u00EA quer lembrar para sempre.' })),
        React.createElement(NewMemoryForm_1.NewMemoryForm, null)));
}
exports["default"] = NewMemory;
