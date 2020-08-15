# Getting Started

## Install with NPM or Yarn

```shell
$ npm i vue-routisan@next
$ # or yarn add vue-routisan@next
```

## Upgrading from v2

::: warning v3 contains breaking changes.
Please see the [upgrade guide](https://github.com/mikerockett/vue-routisan/blob/develop/upgrading.md) and [changelog](https://github.com/mikerockett/vue-routisan/blob/develop/changelog.md) for more information.
:::

## The Scaffold

Made up of two primary components, `Route` and `Factory`, Routisan is really easy to use. Simply declare your routes and add them to the Vue Router instance:

```js
import Vue from 'vue'
import Router from 'vue-router'
import { Route, Factory } from 'vue-routisan'

// Install VueRouter
Vue.use(Router)

// Define your routes…

// Export a new router with Routisan’s routes applied.
export const router = new Router({
  mode: 'history',
  routes: Factory.routes()
})
```
