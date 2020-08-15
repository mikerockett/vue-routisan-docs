# Route Options

To set meta and props on your routes, simply use the available helpers:

```js
Route.view('page', 'Page')
  .meta('key', value)
  .prop('key', value)
  .props({
    key: value,
    anotherKey: anotherValue
  })
```
