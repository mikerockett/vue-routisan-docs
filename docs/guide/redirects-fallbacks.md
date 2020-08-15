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

Akin to a 404, a fallback route is simply registered in the case a requested route does not exist. These can be registered using the `fallback()` helper method:

```js
Route.fallback('ViewNotFound')
```

However, If you need dedicated fallbacks for different type of routes, you'll need to stick to the `view` method and use the `*` wildcard, as prescribed by VueRouter:

```js
Route.view('users/*', 'UserRouteNotFound')
```
