
# [es6-features.org](http://es6-features.org/)

### ECMAScript 6: Feature Overview &amp; Comparison

This is the source of the website [es6-features.org](http://es6-features.org/),
a small overview of
[ECMAScript 6](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts)
language features and a comparison to the older/traditional
[ECMAScript 5](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
equivalents.

## Frequently Asked Questions? (FAQ)

- *Why was it setup? Is the ECMAScript 6 draft not enough?*

  It was setup by computer scientist and software
  architect [Ralf S. Engelschall](mailto:rse@engelschall.com) in March 2015 in order to
  promote ECMAScript 6 in the software engineering projects around him
  and to have bookmarkable URLs at hand for referencing certain ECMAScript 6 features.

- *Why uses the website for ECMAScript 6 the "modernized style" without semicolons as
  the default, but for ECMAScript 5 the "traditional style" with semicolons?*

  ECMAScript since its earliest days supported automatic semicolon interference, of course.
  But people coding ECMAScript 5 started it in an era where lots of tools (especially
  source code compressors) had problems when simicolons where left out from the source code.
  As a consequence, ECMAScript 5 coders sticked to the traditional coding style with
  semicolons. But this era is gone today. ECMAScript 6 still perfectly supports automatic
  semicolon interference and all tools nowadays (including compressors) insert semicolons
  just fine on-the-fly, too. As a consequence ECMAScript 6 coders nowadays finally
  can nearly get rid of all semicolons in order to less clutter their source code
  with bare syntactic sugar.

