# View Resolution

Before we dive into the sugary goodness, let’s talk about view resolution.

Simply put, Routisan allows you to define a custom view resolver function that will be called when resolving the components for your routes. By default, the resolver will simply return the view, as provided in your route definition, which means you need to resolve the rendered component yourself:

```js
import { Route } from 'vue-routisan'
import Home from '@/views/Home'

Route.view('/', Home)
```

More often than not, though, you’ll want to avoid two things:

1. Lots of imports
2. Non-async components bloating up your bundle

To do this, you can make use of Vue Router’s async component syntax by either passing an [async import function](https://router.vuejs.org/guide/advanced/lazy-loading.html) to each route, or by giving the Factory a resolver function:

## Manual pass-in

```js
import { Route } from 'vue-routisan'

Route.view('/', () => import('@/views/Home'))
```

## With a resolver-function

```js
import { Route, Factory } from 'vue-routisan'

Factory.usingResolver(path => () => import(`@/views/${path}`))
Route.view('/', 'Home')
```

::: tip
This approach is recommended as you only need to declare the resolver once, and Routisan will use it for every single route you define.
:::

With that out of the way, let’s jump into the basics. Going forward, we’ll assume that a resolver is being used, just to simplify the examples.
