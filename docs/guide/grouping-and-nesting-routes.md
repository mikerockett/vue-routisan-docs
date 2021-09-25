# Grouping and Nesting Routes

Sometimes, you might find that you want to mix nesting and grouping together – Routisan supports this out of the box:

```js
Route.group({ prefix: 'account', name: 'account' }, () => {
  Route.view('/', 'ManageAccount').name('manage')

  Route.group({ prefix: 'subscription', name: 'subscription' }, () => {
    Route.view('/', 'ViewSubscription').name('view')
    Route.view('cancel', 'CancelSubscription').name('cancel')

    Route.view('upgrade', 'UpgradeSubscription').name('upgrade').children(() => {
      Route.group({ prefix: 'steps' }, () => {
        Route.view('select-new-plan', 'SelectNewPlan').name('select-new-plan')
        Route.view('review-payment-method', 'ReviewPaymentMethod').name('review-payment-method')
      })
    })
  })

  Route.view('cards', 'ManageCards').name('cards')
})
```

This is a relatively complex setup that would otherwise be quite verbose without the help of Routisan, which allows an infinite depth. It also knows to not apply prefixes where they are not needed. Specifically, this means that child routes within a group will not attain that group’s prefix, as Vue Router takes care of that part for you.

Once the compiled routes have been passed to Vue Router, you’d get the routes you expect:

- `/account`
- `/account/subscription`
- `/account/subscription/cancel`
- `/account/subscription/upgrade/steps/select-new-plan`
- `/account/subscription/upgrade/steps/review-payment-method`
- `/account/cards`
