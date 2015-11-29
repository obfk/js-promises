## JS Promise

States:

* fulfilled
* rejected
* pending

Fates:

* resolved
* unresolved

>A promise can be "resolved to" either a promise or thenable, in which case it 
will store the promise or thenable for later unwrapping; or it can be resolved
to a non-promise value, in which case it is fulfilled with that value.

### References

* http://www.html5rocks.com/en/tutorials/es6/promises/
* https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

### Functional Declaration

Functional declarations are hoisted at parse-time.

```javascript
function foo(bar) {};
```

### Functional Expression

```javascript
var foo = function bar(baz) {}; // named
var foo = function(baz) {}; // anonymous
```
