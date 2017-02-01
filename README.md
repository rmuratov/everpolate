Meteor wrap package for original [everpolate](https://github.com/BorisChumichev/everpolate). Original tests reimplemented with `tinytest`.

# Hello, GitKraken!

# Installation

```bash
meteor add rmuratov:everpolate
```

# Usage

Works both on client and server. Exports global `everpolate`.

```javascript
everpolate.polynomial(5, [1, 2, 3, 4], [1, 4, 9, 16])
// → [25]
```

For API reference go [to GitHub project page](http://borischumichev.github.io/everpolate/).
