/*
**  es6-features -- ECMAScript 6 Feature Overview & Comparison
**  Copyright (c) 2015-2016 Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

let fs = require("fs")

/*  minimum Markdown translation ;-)  */
let md = (txt) => {
    txt = txt.replace(/`(.+?)`/g, "<code>$1</code>")
    txt = txt.replace(/\[([^\[\]]+?)\]\(([^\(\)]+?)\)/g, "<a href=\"$2\">$1</a>")
    return txt
}

/*  generate JavaScript code block  */
let js = (clazz, title, code, icon) => {
    /*  protect special characters which are part of entity encoding  */
    code = code.replace(/&/g, "@1@")
    code = code.replace(/;/g, "@2@")

    /*  convert characters which have special meaning in HTML  */
    code = code.replace(/&/g, "&amp;")
    code = code.replace(/</g, "&lt;")
    code = code.replace(/>/g, "&gt;")

    /*  unprotect special characters which are part of entity encoding  */
    code = code.replace(/@1@/g, "<span class=punctuation>&amp;</span>")
    code = code.replace(/@2@([ \t]?\n|[ \t]+\|?\}|[ \t]+\/\/|$)/g, "<span class=semi>;</span>$1")
    code = code.replace(/@2@/g, "<span class=punctuation>;</span>")

    /*  convert ellipsis to corresponding Unicode character  */
    code = code.replace(/(\s+)\.\.\.(\s+)/g, "$1<span class=ellipsis>&hellip;</span>$2")

    /*  simple syntax-highlighting of JavaScript code, the rookie but sufficient way  */
    code = code.replace(
        /(\s=\s|=&gt;|&gt;|&lt;|&amp;|===|[%+*{}().,\[\]-])/g,
        "<span class=punctuation>$1</span>")
    code = code.replace(
        /("(?:.|\n)*?"|'(?:.|\n)*?'|`(?:.|\n)*?`|\d+(?:\.\d+)?(?!@))/g,
        "<span class=literal>$1</span>")
    code = code.replace(
        /\b(this|function|class(?=[^=])|extends|return|if|new|import|export|in|of|var|let|while|for|const)\b/g,
        "<span class=keyword>$1</span>")
    code = code.replace(
        /((?:^|\s)\/\/[^\n]*)/g,
        "<span class=comment>$1</span>")
    code = code.replace(
        /\\\|/g,
        "&#124;")
    code = code.replace(
        /\|(.+?)\|/g,
        "<span class=mark>$1</span>")
    code = code.replace(/@3@/g, "|");
    code = code.replace(/class=([a-z]+)/g, "class=\"$1\"")

    /*  extend title with style switcher  */
    title = "<b>" + title + "</b> &mdash; " +
        "syntactic sugar: <span class=\"style reduced\">reduced</span> | " +
        "<span class=\"style traditional\">traditional</span>"

    /*  assemble everything  */
    txt = `<div class="js ${clazz}">\n`
    txt += `    <div class="title">${title}</div>\n`
    txt += `    <div class="code">${code}</div>\n`
    txt += `    <i class="icon fa fa-circle"></i>\n`
    txt += `    <i class="icon fa fa-${icon}"></i>\n`
    txt += `</div>\n`

    return txt
}

/*  read the input source  */
let txt = fs.readFileSync("features.txt", "utf8")

/*  remove all comment lines  */
txt = txt.replace(/^#.*$/mg, "")

/*  iterate over input source  */
let nav = ""
let out = ""

/*  for every outer section...  */
nav += "<ul>\n"
txt.replace(/\s*([^\n]+)\n====+[ \t]*\n((?:.|\n)+?)(?=[^\n]+\n====+[ \t]*\n|$)/g, (m, title, txt) => {
    /*  generate level-1 navigation entry  */
    nav += `<li class="title">${md(title)}\n`
    nav += "    <ul>\n"

    /*  for every inner section...  */
    txt.replace(/\s*([^\n]+)\n----+[ \t]*\n((?:.|\n)+?)(?=[^\n]+\n----+[ \t]*\n|$)/g, (m, subtitle, txt) => {
        let id = subtitle.replace(/[^a-zA-Z0-9]+/g, "")

        /*  generate level-2 navigation entry  */
        nav += `<li class="subtitle subtitle_${id}">\n`
        nav += `    <a href="#${id}">${md(subtitle)}</a> <i class="fa fa-arrow-circle-right"></i>`
        nav += "</li>\n"

        /*  generate showcase header  */
        out += `<div id="${id}" class="showcase showcase_${id}">`
        out += `    <div class="title">${md(title)}</div>\n`
        out += `    <div class="subtitle">${md(subtitle)}</div>\n`

        /*  for the showcode content...  */
        txt.replace(/^\s*((?:.|\n)+?)\n\n(6\|(?:.|\n)+?\n)\n(5\|(?:.|\n)+?)\s*$/, (m, desc, es6, es5) => {
            out += `    <div class="desc">${md(desc)}</div>\n`
            es6 = es6.replace(/^6\| ?/mg, "").replace(/^\s*/, "")
            es5 = es5.replace(/^5\| ?/mg, "").replace(/^\s*/, "")
            out += js("es6", "ECMAScript 6", es6, "check-circle")
            out += '    <div class="arrow"><i class="fa fa-caret-up"></i><i class="fa fa-caret-down"></i></div>'
            out += js("es5", "ECMAScript 5", es5, "times-circle")
        })
        out += "</div>\n"
    })

    nav += "    </ul>\n"
    nav += "</li>\n"
})
nav += "</ul>\n"

/*  read the HTML template  */
let tmpl = fs.readFileSync("features.html", "utf8")
tmpl = tmpl.replace(/%BODY%/, out).replace(/%NAV%/, nav)

/*  write the resulting HTML page  */
fs.writeFileSync("index.html", tmpl, "utf8")

