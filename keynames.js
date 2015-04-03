keynames = {
  keymap: {
		specials: {
			9: 'TAB',
			13: 'ENTER',
			27: 'ESC',
			32: 'SPACE',
			37: 'LEFT',
			38: 'UP',
			39: 'RIGHT',
			40: 'DOWN',
			8: 'BACKSPACE'
		},

		symbolAliases: {
			',': 'COMMA',
			'/': 'SLASH',
			'\\': ['BACKSLASH','DIVIDE'],
			'~': 'TILDE',
			'-': ['DASH'],
			'+': 'PLUS',
			'*': ['STAR','MULTIPLY','TIMES'],
			'|': ['PIPE'],
			'&': 'AMPERSAND',
			'@': 'AT',
			'!': 'EXCLAMATION',
			'#': 'HASH',
			'$': 'DOLLAR',
			'%': 'PERCENT',
			'^': ['CARET','HAT'],
			'.': ['DOT','PERIOD'],
			'_': 'UNDERSCORE',
			'?': 'QUESTION',
		},

		shiftSymbols: {
			48: ")", 49: "!", 50: "@", 51: "#", 52: "$", 53: "%", 54: "^", 55: "&", 56: "*",
			57: "(", 186: ":", 187: "+", 188: "<", 189: "_", 190: ">", 191: "?", 219: "{", 220: "|",
			221: "}", 222: '"'
		},

		symbols : { 186: ";", 188: ",", 190: ".", 191: "/", 220: "\\", 219: "[", 221: "]", 222: "'"}
	},
    names: function( keymap, e ){

	// Listen by keycode
	var code = e.keyCode

	var isNumberKey = code >= 48 && code <= 57
	var isAlphaKey = code >= 65 && code <= 65+26

		// Don't detect numbers, when holding shift
		// because they are actually typing a symbol
		// which we capture later
		var alphanumeric = (isAlphaKey || isNumberKey && !e.shiftKey) && String.fromCharCode(e.keyCode)

		// Different symbols are accesible depending on the shift key
		var symbol = (e.shiftKey ? keymap.shiftSymbols : keymap.symbols )[code]

		symbolAlias = (keymap.symbolAliases)[symbol]

		// Special keys that are not affected by SHIFT like ESC or SPACE
		var special = (keymap.specials)[code]

		// Create a flat array of shortcuts to check
		return [].concat(
			code,
			alphanumeric,
			special,
			symbol,
			symbolAlias
		)

		// Remove any falsey entries
		.filter( Boolean )
	}
}
keynames.get = keynames.names.bind(0,keynames.keymap)
