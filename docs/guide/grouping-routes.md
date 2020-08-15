# Grouping Routes

VueRouter doesn’t understand the concept of grouping routes – it only knows how to nest. By providing an abstraction layer on top of VueRouter, we can add the ability to group routes, which allows you to set names, prefixes, and guards (more on that to follow) for each route declared in the callback passed to `group()` on an existing Route instance.

## Defining a Group

The `group()` method takes two arguments: the first is an options object, and the second is the callback that defines new routes within the group.

Here’s a simple example that sets a **prefix** and a **name** on the grouped routes:

```js
Route.group({ prefix: 'contact', name: 'contact' }, () => {
  Route.view('details', 'Contact/Details').name('details')
  Route.view('map', 'Contact/Map').name('map')
})
```

This will generate two routes that are independent of one another, not compiled as *children* of `contact`:

- `/contact/details`
- `/contact/map`

## Cascading Names and Prefixes

As with [nested routes](nesting-routes.md), the names will automatically cascade, in the same way the prefix will.
