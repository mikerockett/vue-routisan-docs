# Nesting Routes

Routisan provides a fluent API for nesting your routes as *children* by using a callback passed to the route instance’s `children()` method. Naturally, you can nest as deeply as you like.

## Defining Nested Routes

Let’s expand on the last example by adding a few more account-management routes:

```js
Route.view('account', 'AccountView').children(() => {
  Route.view('/', 'ManageAccount')
  Route.view('/emails', 'ManageEmails')
})
```

Here, `AccountView` would be the view that contains the `<router-view />` for child routes.

::: tip
**Leading slashes** will be removed from child routes, otherwise the route path above would simply be `/emails`, not `/account/emails`. The aim here is to compile routes according to natural expectations of the tree-structure provided.
:::

## Cascading Names

You can cascade route names, without needed to re-define the prefix of a nested name. Expanding on the above example:

```js
Route.view('account', 'AccountView').name('account').children(() => {
  Route.view('/', 'ManageAccount').name('manage')
  Route.view('/emails', 'ManageEmails').name('emails')
})
```

This would produce a set of routes with the following names:

- `/account` → `account.manage`
- `/account/emails` → `account.emails`
