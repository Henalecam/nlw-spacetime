'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var api_1 = require("@/lib/api");
var js_cookie_1 = require("js-cookie");
var navigation_1 = require("next/navigation");
funcion;
NewMemoryForm();
{
    var router_1 = navigation_1.useRouter();
    function handleCreateMemory(event) {
        return __awaiter(this, void 0, void 0, function () {
            var formDate, fileToUpload, coverUrl, uploadFormData, uploadResponse, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        formDate = new FormData(event.currentTarget);
                        fileToUpload = formData.get('coverUrl');
                        coverUrl = '';
                        if (!fileToUpload) return [3 /*break*/, 2];
                        uploadFormData = new FormData();
                        uploadFormData.set('file', fileToUpload);
                        return [4 /*yield*/, api_1.api.post('/upload', uploadFormData)];
                    case 1:
                        uploadResponse = _a.sent();
                        coverUrl = uploadResponse.data.fileUrl;
                        _a.label = 2;
                    case 2:
                        token = js_cookie_1["default"].get('token');
                        return [4 /*yield*/, api_1.api.post('/memories', {
                                coverUrl: coverUrl,
                                content: formData.get('content'),
                                isPublic: formData.get('isPublic')
                            }, {
                                headers: {
                                    Authorization: "Bearer " + token + "}"
                                }
                            })];
                    case 3:
                        _a.sent();
                        router_1.push('/');
                        return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement("form", { onSubmit: handleCreateMemory, className: "flex flex-1 flex-col gap-2" },
        React.createElement("div", { className: 'flex items-center gap-4' },
            React.createElement("label", { htmlFor: 'media', className: 'flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100' },
                React.createElement(lucide_react_1.Camera, { className: 'h-4 w-4' }),
                "Anexar m\u00EDdia"),
            React.createElement("label", { htmlFor: "isPublic", className: 'flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100' },
                React.createElement("input", { type: "checkbox", name: "isPublic", id: "isPublic", value: 'true', className: 'h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500' }),
                "Tornar mem\u00F3ria p\u00FAblica")),
        React.createElement(MediaPicker_1.MediaPicker, null),
        React.createElement("textarea", { name: 'content', spellCheck: false, className: 'w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0', placeholder: 'Escreva sua mem\u00F3ria... Fique livre para adicionar fotos, v\u00EDdeos e relatos sobre essa experi\u00EAncia que voc\u00EA quer lembrar para sempre.' }),
        React.createElement("button", { type: "submit", className: "inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600" }, "Salvar")));
}
