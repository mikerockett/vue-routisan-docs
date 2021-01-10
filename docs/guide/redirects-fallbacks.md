# Redirects and Fallbacks

## Redirecting routes

To perform a simple redirect from one route to another, you can use the `redirect()` method on the Route builder.

**Using a path:**

```js
Route.redirect('home', '/')
```

**Using a raw location:**

```js
Route.redirect('home', { name: 'home' })
```

**Using a callable:**

```js
Route.redirect('home', (to) => resolveLocationOrPath())
```

## Fallbacks and Asterisks

To register a fallback route, a named regex-based parameter must be specified. This may be done with the usual colon syntax, or the alternative curly syntax:

```js
Route.view('/:fallback(.*)*', 'ViewNotFound') // or
Route.view('/{fallback}(.*)*', 'ViewNotFound')
```

::: tip Fallback Helper Removed
Before Routisan 3 Beta 2, a fallback option was introduced to provide a clean syntax for defining a catch-all route. However, Vue Router 4 removed catch-alls and replaced them with named regex-based paramaters.

Given that Routisan does not force a specific version of Vue Router (it does not depend on it, nor does it make it a peer dependency), it is unable to determine the correct course of action for fallback routes.

At a later stage, Routisan may introduce Vue Router 4 as a peer dependency, at which time `fallback` may become available again.
:::
