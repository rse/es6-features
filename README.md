
# [es6-features.org](http://es6-features.org/)

### ECMAScript 6: Feature Overview &amp; Comparison

Copyright (c) 2015-2016 Ralf S. Engelschall &lt;[rse@engelschall.com](mailto:rse@engelschall.com)&gt; &lt;[@engelschall](http://twitter.com/engelschall)&gt;<br/>
Partially based on [code snippets](http://git.io/es6features) by Luke Hoban.<br/>
Licensed under MIT license.

This is the source of the website [es6-features.org](http://es6-features.org/),
a small overview of current
[ECMAScript 6](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
language features and a comparison to their old
ECMAScript 5 equivalents.

## Frequently Asked Questions? (FAQ)

- *Why was it setup? Is the ECMAScript 6 specification not enough?*

  It was setup by computer scientist and software
  architect [Ralf S. Engelschall](mailto:rse@engelschall.com) in March 2015 in order to
  promote ECMAScript 6 in the software engineering projects around him
  and to have bookmarkable URLs at hand for referencing certain
  ECMAScript 6 features. Additionally, creating this website was a
  good approach for Ralf S. Engelschall to learn the new ECMAScript 6
  features himself.

- *Where can I find the current browser support status quo for ECMASCript 6?*

  Have a look at the regularily updated
  [ECMAScript compatibility table](http://kangax.github.io/compat-table/es6/) by kangax.
  There, especially notice the column "Babel + core-js" as this is what can be achieved
  today with transpiling (and that's fully sufficient for practice).

- *Where can I find the latest ECMAScript 6 standard?*

  The final ECMAScript 6 standard (ECMA-262) was published in June 2015. You can find the
  standard on [ecmascript.org](http://www.ecma-international.org/publications/standards/Ecma-262.htm).

- *How can I use ECMAScript 6 if my JavaScript runtime still does not support it?*

  Use the awesome [Babel](http://babeljs.io/) transpiler. For Node.js/io.js environments
  just use its tricky [`require` hook](http://babeljs.io/docs/usage/require/). For browser environments use Babel in conjunction
  with [Browserify](http://browserify.org/) and its [Babelify](https://github.com/babel/babelify) plugin. For
  other tools see [Using Babel](http://babeljs.io/docs/using-babel/).
  If you want to see pre-integrated scenarios, check out our sibling project
  [es6-support](https://github.com/rse/es6-support) for various code examples!

- *Why does the website default use the "reduced" syntactic sugar style (without semicolons)
  for ECMAScript 6 and the "traditional" syntactic sugar style (with semicolons) for ECMAScript 5?*

  ECMAScript since its earliest days supported automatic semicolon
  inference/insertion, of course. But people coding ECMAScript 5 started it
  in an era where lots of tools (especially source code compressors)
  had problems when semicolons where left out from the source code. As
  a consequence, most ECMAScript 5 coders maintained the traditional
  coding style with semicolons as the syntactic sugar, although in most
  of the cases they are not necessary. But this era is gone today.
  Both ECMAScript 6 and all tools (including compressors) perfectly
  support automatic semicolon inference/insertion nowadays. As a consequence,
  ECMAScript 6 coders nowadays can get rid of nearly all
  semicolons and remove clutter from their source code. Ralf S. Engelschall is a strong promoter of reducing
  source code to its bare minimum. Hence, in his personal opinion
  ECMAScript 6 should be coded with as less syntactic sugar as possible
  and hence without semicolons. But if you disagree, just switch the
  shown style on the website. If you even need to enforce a particular
  style for both ES6 and ES5 code snippets in your bookmarks, just use
  one of the following URLs:
  [ES6-Features (reduced style)](http://es6-features.org/#reduced) or
  [ES6-Features (traditional style)](http://es6-features.org/#traditional)

- *I still don't understand: why should I use ECMAScript 6? ECMAScript 5 looks sufficient.*

  ECMAScript 5 is a nice and decent programming language, of course. But
  because of its history, it has some nasty aspects which ECMAScript 6
  finally resolves. As programming never is just about getting the necessary
  functionality done, it is advised to also use the best language,
  too. ECMAScript 6's language design is cleaner than ECMAScript 5,
  its syntax increases the expressiveness of your code, it decreases the
  necessary boilerplate code (e.g. `function` vs. arrow syntax) and it
  especially let you get rid of some very nasty but required hacks and
  workarounds from the ECMAScript 5 era (e.g. `var self = this`).
  So, ECMAScript 5 might be sufficient, but ECMAScript 6 nevertheless
  is an important improvement.

- *I've found a mistake, how can I contribute?*

  The source is the file `features.txt`, everything else on [es6-features.org](http://es6-features.org) is
  just generated out of it. Fork this project on Github, edit the file
  `features.txt` and then please send a pull request.

- *Do you know more such ECMAScript 6 feature lists?*

    - [ECMAScript 6 Features](https://github.com/lukehoban/es6features#readme) (by Luke Hoban)
    - [Learn ES2015 - A detailed overview of ECMAScript 6 features](https://babeljs.io/docs/learn-es2015/) (by Babel team)
    - [ECMAScript 6 Cheatsheet](http://help.wtf/es6) (by Erik Moeller)
    - [First Steps with ECMAScript 6](http://exploringjs.com/es6/ch_first-steps.html) (by Axel Rauschmayer)
    - [JS Features](http://jsfeatures.in/) (by Hemanth.HM)
    - [Minimalist examples of ES6 functionalities](https://github.com/hemanth/paws-on-es6) (by Hemanth.HM)
    - [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read/) (by Nicholas C. Zakas)

