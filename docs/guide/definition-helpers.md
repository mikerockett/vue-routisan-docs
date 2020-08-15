# Definition Helpers

If you don’t want to use `Route` everywhere, you can import the various helper-delegates and use those directly:

```js
import { route, redirect, fallback, group } from 'vue-routisan'

route('/', 'Home')
redirect('home', '/')
fallback('404')
group({ prefix: 'account' }, callback)
```
