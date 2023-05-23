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
        React.createElement(NewMemoryForm_1.NewMemoryForm, null)));
}
exports["default"] = NewMemory;
