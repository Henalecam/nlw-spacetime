"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var google_1 = require("next/font/google");
var Hero_1 = require("@/components/Hero");
var Profile_1 = require("@/components/Profile");
var Signin_1 = require("@/components/Signin");
var Copyright_1 = require("@/components/Copyright");
var headers_1 = require("next/headers");
var roboto = google_1.Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' });
var baiJamjuree = google_1.Bai_Jamjuree({
    subsets: ['latin'],
    weight: '700',
    variable: '--font-bai-jamjuree'
});
exports.metadata = {
    title: 'NLW Spacetime',
    description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e Typescript.'
};
function RootLayout(_a) {
    var children = _a.children;
    var isAuthenticated = headers_1.cookies().has('token');
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: roboto.variable + " " + baiJamjuree.variable + " bg-gray-900 font-sans text-gray-100" },
            React.createElement("main", { className: "grid min-h-screen grid-cols-2" },
                React.createElement("div", { className: "relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16" },
                    React.createElement("div", { className: "absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" }),
                    React.createElement("div", { className: "absolute bottom-0 right-2 top-0 w-2 bg-stripes" }),
                    isAuthenticated ? React.createElement(Profile_1.Profile, null) : React.createElement(Signin_1.SignIn, null),
                    React.createElement(Hero_1.Hero, null),
                    React.createElement(Copyright_1.Copyright, null)),
                React.createElement("div", { className: "flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover" }, children)))));
}
exports["default"] = RootLayout;
