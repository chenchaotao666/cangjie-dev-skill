## Rune (characters)

The representation of character type literals is as follows:
A `Rune` literal starts with the character `r`, followed by a character enclosed in a pair of single or double quotes. For example:
```
let a: Rune = r'a'
let b: Rune = r"b"
```

Escape characters refer to characters in a character sequence that provide an alternative interpretation for the subsequent characters. Escape characters start with the escape symbol `\`, followed by the character that needs to be escaped. For example:
```
let slash: Rune = r'\\'
let newLine: Rune = r'\n'
let tab: Rune = r'\t'
```

Universal characters start with \u, followed by 1 to 8 hexadecimal numbers defined within a pair of curly brackets, which can represent the character corresponding to the Unicode value. For example:
```
let he: Rune = r'\u{4f60}'
let llo: Rune = r'\u{597d}'
```

### Supported Operations for Character Types
The character type only supports relations operators: less than (`<`), greater than (`>`), less than or equal to (`<=`), greater than or equal to (`>=`), equality (`==`), inequality (`!=`). The comparisons are based on the Unicode values of the characters.

### Conversion from Rune to UInt32 and from integer types to Rune.
```
let x: Rune = 'a'
let y: UInt32 = 65
let r1 = UInt32(x)
let r2 = Rune(y)
```