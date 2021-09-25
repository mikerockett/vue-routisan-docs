# Navigation Guards

Routisan provides a simple, Promise-based API for guarding your routes. This allows you to easily define your guards once and automatically have `beforeEnter` handle them on your behalf.

In 2.x, guards were simple functions that you passed to `guard()` or `beforeEnter`. These were processed using `vue-router-multiguard`, which simply allowed you to provide more than one guard function to a route.

With 3.x, a more expressive API was introduced, which allowed for the removal of multiguard in favour of a more automated approach using classes and Promises.

## Defining Guards

To define a new guard, simply create a class that extends `Guard` and implements the `handle` method. Here’s a simple example:

```js
import { Guard } from 'vue-routisan'

class NavigationGuard extends Guard {
  handle(resolve, reject, { from, to }) {
    // resolve or reject based on a certain condition
  }
}
```

The instantiated class essentially wraps a Promise, which allows you to determine whether or not the user should be allowed to continue to the route, and then `resolve()` or `reject()` based on that.

A common example is to check whether or not the user is authenticated. If they need to sign in, then the guard needs to take them to a sign-in view:

```js
import { Guard } from 'vue-routisan'
import { isAuthenticated } from '@/services/auth'

class AuthenticationGuard extends Guard {
  handle(resolve, reject, { from, to }) {
    isAuthenticated()
      ? resolve()
      : reject({ name: 'auth.signin' })
  }
}
```

## Registering Guards

In order to apply a guard to a route, it must first be registered with the Factory:

```js
import { Factory } from 'vue-routisan'
import { AuthenticationGuard } from '@/routing/guards/authentication-guard'

Factory.withGuards({
  AuthenticationGuard
})
```

If you would like to alias the name of the guard to something shorter, you can provide a key:

```js
Factory.withGuards({
  auth: AuthenticationGuard
})
```

## Using  Guards

Once registered, you can attach the guard to the route using the `guard()` method on an existing Route instance:

```js
Route.view('change-password', 'ChangePassword').guard('AuthenticationGuard')
Route.view('change-password', 'ChangePassword').guard('auth') // if you registered with an alias
```

> Note how guards are referenced using strings, and not directly. Remember, guards are registered with the Factory, which will resolve the guard by name when it needs it.

## Multiple Guards

If you have registered and would like to use more than one guard, simply pass each one as an additional argument:

```js
import { Factory, Route } from 'vue-routisan'

Factory.withGuards({
  auth: AuthenticationGuard,
  MustBeSuper
})

Route.view('user/:user/tokens/revoke', 'RevokeUserTokens').guard('auth', 'MustBeSuper')
```

## Guarding Nested Routes

To guard all the children of a route, simply set the guard on the parent route, and Routisan will automatically cascade them down to each child route. Expanding on a previous example:

```js
Route.view('account', 'AccountView').guard('auth').children(() => {
  Route.view('/', 'ManageAccount')
  Route.view('/emails', 'ManageEmails')
})
```

## Guarding Grouped Routes

Likewise, you can guard a group of routes by providing the `guard` key to the group’s options. Provide either a string or an array of guards to apply to all routes in the group:

```js
Route.group({ prefix: 'billing', name: 'billing', guard: 'auth' /** or guard: ['auth', 'otp-ok'] */ }, () => {
  Route.view('history', 'Billing/History').name('history')
  Route.view('payment-methods', 'Billing/PaymentMethods').name('payment-methods')
})
```

## Debugging Guards

Useful for debugging, guards may log the outcome of their inner promises by declaring a method that returns a boolean, called `logPromiseOutcomes`:

```js
import { Guard } from 'vue-routisan'

class NavigationGuard extends Guard {
  logPromiseOutcomes() {
    return process.env.NODE_ENV !== 'production'
  }

  // … handle
}
```
