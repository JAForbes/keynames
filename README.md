# keynames
A function that returns an array of names of a keyboard key.


Quick Start
-----------

```js
window.onkeydown = function(e){
  keynames.get(e) //=> [190, ".", "DOT", "PERIOD"]
}
```

Keymap
======

`keynames.keymap` has four properties

- `specials`
- `symbols`
- `shiftSymbols`
- `symbolAliases`

`specials`, `symbols` and `shiftSymbols` map keyCodes to string descriptions of that key.
`symbolAliases` maps the string description from `symbols` into an a string that describe the symbol.

All of these properties can map to a single string or an array of strings.  For example:

```js
//There are three symbol aliases for the symbol *
keynames.keymap.symbolAliases['*'] //=> ['STAR', 'MULTIPLY', 'TIMES']

//keynames.get will return the original keyCode, the symbol and the symbol aliases
keynames.get({keyCode: 56, shiftKey: true }) //=> [56, "*", "STAR", "MULTIPLY", "TIMES"]
```

You can edit or even override the keymap.  If a property is missing from keymap it will just be ignored.

