# Basic Routes

As shown in the [intro](readme.md), a simple route is comprised of a `path` and a `view`, passed in via `Route.view()`, which returns a new `Route` instance.

To expand on that, Routisan will automatically sanitize slashes on your behalf, injecting them where they’re needed, and removing them where they’re not (this includes removing extra consecutive slashes).

```js
Route.view('about', 'About')
Route.view('/company/', 'Company')
```

These two routes will be compiled as `/about` and `/company`, respectively.

When you use nested routes, the leading slashes will automatically be omitted – more on that in the [Nesting Routes](nesting-routes.md) section.

## Named Views

If you’re using [named views](https://router.vuejs.org/guide/essentials/named-views.html), you’ll want to declare additional views that Vue Router will render. This can be done with the optional third argument, `additionalViews`:

```js
Route.view('about', 'About', {
  sidebar: 'Sidebars/About',
  navigator: 'Navigators/About'
})
```

Internally, Routisan does not provide the `component` key to the compiled route. Rather, it provides a `components` key, and always sets the `default` to the provided second argument. By doing this, we simplify the compilation process, where an additional check is no longer required.

## Named Routes

Support for [named routes](https://router.vuejs.org/guide/essentials/named-routes.html) is baked into Routisan, using the `name()` method on an existing `Route` instance:

```js
Route.view('account', 'ManageAccount').name('manage-account')
```

To expand on this functionality, Routisan introduces similar behaviour that comes from Laravel’s router, where nested names are automatically cascaded, using the character-separator of your choice (defaults to a `.`).

::: tip
Unlike Laravel, however, you do not need to suffix the parent name with the separator – this will be done for you. More on this in the “Nesting Routes” section.
:::

If you’d like to use a different character-separator, you can define that character in the Factory:

```js
Factory.withNameSeparator('-')
```

## Aliasing Routes

To make a route accessible from two URIs, simply use the `alias()` method on an existing Route instance.

```js
Route.view('about', 'About').alias('about-us')
```

> The `About` view will now be available to both `/about` and `/about-us`.

::: warning
If you intend for your app to be served as a website, and SEO is important to you, it isn’t recommended to do this. Aliases are most often used in apps where a route may have changed, but the legacy route needs to stick around for a while.
:::
