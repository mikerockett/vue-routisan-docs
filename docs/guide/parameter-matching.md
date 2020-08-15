# Parameter Matching

## Alternative Curly Syntax

When adding paramaters to routes in VueRouter, you are limited to the `:colon` format. In making Routisan align with Laravel’s router a little more, you can now also use the `{curly}` format.

When using curlies, please be aware that joining two parameters together will result in their separation into two segments. As an example, `{a}{b}` will be compiled to `:a/:b`. This will not happen when using the colon syntax, however, as that would be a destructive change at router-level.

**Optional parameters** may be defined by placing the question-mark outside of the curlies. Ex, `{user}?` is compiled to `:user?`.

## Advanced Pattern Matching

VueRouter supports all the patterns and features that [path-to-regexp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0#parameters) provides. This includes the ability to add regular expressions to your routes.

One such example, though uncommon, is the catch-anything `(.*)`. To make this a little more clear, you can use `{all}` in place of this expression. The behaviour doesn’t change, however – you cannot access `all` as a parameter.

Additional notes:

- **Constraining parameters** to expressions is done by placing them outside of the curlies. Ex, `{user}(\\d+)` is compiled to `:user(\\d+)`.
- **Aliased constraints** for numbers and strings are available: Ex, `user/{user}(number)` is compiled to `user/:user(\\d+)` and `posts/{slug}(string)` is compiled to `posts/:slug(\\w+)`
