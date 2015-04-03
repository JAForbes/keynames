# keynames
A function that returns an array of names of a keyboard key.


####Quick Start

```js
window.onkeydown = function(e){
  keynames.get(e) //=> [190, ".", "DOT", "PERIOD"]
}
```

###Keymap


`keynames.keymap` has four properties

- `specials` : Non alphanumeric keys that aren't affected by shift.  Like ESC or TAB
- `symbols` : Non alphanumeric keys that are active when the shift key is not active. Like ; or `
- `shiftSymbols`: Non alphanumeric keys that are active when the shift key is active. Like ! or $
- `symbolAliases`: Other names that describe symbols.  Like SEMICOLON or DOLLAR


####Single or Multiple Aliases per symbol

All of the keymap properties can map to a single string or an array of strings.  For example:

```js
//There are three symbol aliases for the symbol *
keynames.keymap.symbolAliases['*'] //=> ['STAR', 'MULTIPLY', 'TIMES']

//keynames.get will return the original keyCode, the symbol and the symbol aliases
keynames.get({keyCode: 56, shiftKey: true }) //=> [56, "*", "STAR", "MULTIPLY", "TIMES"]

```

```js
//There is only one symbol alias for the symbol '!'
keynames.keymap.symbolAliases['!'] 

//keynames.get will just return a shorter array
keynames.get({keyCode: 49, shiftKey: true }) //=> [49, "!", "EXCLAMATION"]

```

####Editing the keymap

Different regions of the world have different keymappings.  And different applications have different needs when describing
the keycodes.  

You can always directly edit the default keymap.  But if you want to customize the `keymap` without mutating it permanently. 
Access the `keynames.names` function directly and pass in your own key map.

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

It is perfectly safe to provide an empty keymap.  You'll just get no names back other than the original keycode.

```js
var event = {keyCode: 50, shiftKey: true}

 // Provide an empty keymap
keynames.names({}, event) //=> [50] // Only get back the keyCode

```


