::: warning Beta
This documentation is for Vue Routisan 3, which is currently in **beta**. Whilst suitable for production, we recommend you wait for the initial stable release. To see the docs for v2, head over to the [2.x tag on GitHub](https://github.com/mikerockett/vue-routisan/tree/2.x).
:::

# Introduction

Vue Routisan provides you with a friendlier way to declare route definitions for Vue Router. Inspired by Laravel, it uses chained calls to build up your routes, allowing you to group and nest as deeply as you like.

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
| /blog/:post/edit  | Blog/Posts/Edit (rendered within Blog/Post)  | blog.single-post.edit  |
| /blog/:post/stats | Blog/Posts/Stats (rendered within Blog/Post) | blog.single-post.stats |
