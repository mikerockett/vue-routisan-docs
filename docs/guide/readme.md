# Introduction

::: warning
Vue Routisan 3 is currently in **alpha**. Whilst suitable for production, we recommend you wait for a release-candidate or the stable release of 3.0.
:::

Routisan provides you with a friendlier way to declare route definitions for Vue Router. Inspired by Laravel, it uses chained calls to build up your routes, allowing you to group and nest as deeply as you like.

```js
Route.view('blog', 'Blog').name('blog').children(() => {
  // All Posts
  Route.view('/', 'Blog/Posts').name('posts')

  // Single Post
  Route.view('{post}', 'Blog/Post').name('single-post').children(() => {
    Route.view('edit', 'Blog/Post/Edit').name('edit')
    Route.view('stats', 'Blog/Post/Stats').name('stats')
  })
})
```

This produces an array of routes in the format Vue Router expects to see, and follows a behaviour somewhat similar to Laravel’s router, such as:

- Using callbacks to iteratively collect routes
- Correctly joining nested routes together, regardles of prefixed slashes
- Correctly joining the names of nested routes, using a separator of your choice

**The above example produces the following route definitions:**

| Path              | Component                                    | Name                   |
| ----------------- | -------------------------------------------- | ---------------------- |
| /blog             | Blog/Posts (rendered within Blog)            | blog.posts             |
| /blog/:post/edit  | Blog/Posts/Edit (rednered within Blog/Post)  | blog.single-post.edit  |
| /blog/:post/stats | Blog/Posts/Stats (rednered within Blog/Post) | blog.single-post.stats |