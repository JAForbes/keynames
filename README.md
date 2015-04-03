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

//There is only one symbol alias for the symbol '!'
keynames.keymap.symbolAliases['!'] 

//keynames.get will just return a shorter array
keynames.get({keyCode: 49, shiftKey: true }) //=> [49, "!", "EXCLAMATION"]

```

You can edit or even override the keymap.  If you want to customize the `keymap` without mutating it permanently, you can access the mapping function directly and pass in your own key map.

```js

var event = {keyCode: 50, shiftKey: true}

// Because we are passing in the default keymap this is equivalent to calling keynames.get
// without a keymap.
keynames.names(
  keynames.keymap,  // <-- Provide your own keymap
  event
) //=> [50, '@', 'AT']

keynames.get(event) //=> [50, '@', 'AT']

```
If a property is missing from keymap it will just be ignored.

This is perfectly safe:

```js
var event = {keyCode: 50, shiftKey: true}

 // <-- Provide an empty keymap
keynames.names({}, event) //=> [50] // Only get back the keyCode

```


