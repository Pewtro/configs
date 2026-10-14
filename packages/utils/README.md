# Utilities by Putro

A small collection of utilities that I keep rewriting across projects: URL path building and
`null`/`undefined` conversion.

## Installation

To install this package run the following command in the terminal in the root directory of your application.

```sh
pnpm install @putstack/utils
```

**OR**

```sh
npm install --save @putstack/utils
```

**OR**

```sh
yarn add @putstack/utils
```

## `generatePath`

Builds a URL path from a template, substituting parameters and encoding their values.

```ts
import { generatePath } from '@putstack/utils';

generatePath('/users/:userId/posts/:postId', { userId: '1', postId: '2' });
// => '/users/1/posts/2'

generatePath('/users/:userId', { userId: '1' }, 'api.example.com');
// => 'https://api.example.com/users/1'

generatePath('/users/:userId', { userId: '1' }, 'api.example.com', 'http');
// => 'http://api.example.com/users/1'
```

The arguments are `(path, parameters?, baseUrl?, protocol?)`. `parameters` is only required when the
template has at least one required parameter, so it can be omitted otherwise. The `protocol`
defaults to `https` and is ignored when `baseUrl` already carries a scheme.

### Parameter syntax

| Syntax   | Required | Optional  |
| -------- | -------- | --------- |
| `:name`  | `:name`  | `:name?`  |
| `{name}` | `{name}` | `{name?}` |

Parameter names may contain letters, digits, `_`, `-`, and `.`. Values are URL-encoded, and the
booleans `true`/`false` and numbers are stringified first. An optional parameter with no value
drops its whole path segment, so `/users/:userId?/posts` becomes `/users/posts`.

### Query strings

Parameters may also appear in the query string, as a key or a value:

```ts
generatePath('/users/:userId?active=true', { userId: '1' });
// => '/users/1?active=true'

generatePath('/search?query=:term', { term: 'two words' });
// => '/search?query=two%20words'

generatePath('/search?term=:term?&page=1');
// => '/search?page=1'
```

A `?` that is not followed by a `/`, a `}`, or the end of the template starts a query string, so it
is never confused with the `?` that marks an optional parameter. A query pair whose optional
parameter has no value is dropped entirely rather than left as a dangling `key=`, and the `?` is
removed altogether when no pairs survive. Colons that are not parameters, such as `?at=12:30`, are
left alone.

### Errors

`generatePath` throws rather than returning a broken URL when:

- a required parameter has no value, or its value is an empty string;
- a segment or query pair still contains a placeholder after substitution, such as the malformed
  template `/users/:user:id`.

### Path normalization

Duplicate slashes are collapsed and trailing slashes are removed, so the result never ends in a `/`.
A template that resolves to no path segments, such as `/`, yields the base URL on its own without a
trailing slash, and a trailing slash on `baseUrl` is only used as a separator.

### Typing

The parameter names, whether they are required, and the type of `parameters` are all inferred from
the template's literal type. That inference only works for a literal path: once a path widens to
`string`, `parameters` is typed as `{}` and nothing is checked.

```ts
generatePath('/users/:userId', {}); // error: missing `userId`

const dynamic: string = '/users/:userId';
generatePath(dynamic, { typo: '1' }); // compiles, because nothing can be inferred
```

## `null` and `undefined` conversion

| Function                   | Input              | Output        |
| -------------------------- | ------------------ | ------------- |
| `nullToUndefined`          | `null`             | `undefined`   |
| `recursiveNullToUndefined` | `{ a: null }`      | `{}`          |
| `undefinedToNull`          | `undefined`        | `null`        |
| `recursiveUndefinedToNull` | `{ a: undefined }` | `{ a: null }` |

The recursive variants walk arrays and plain objects. Arrays keep their length, so `null` becomes
`undefined` in place. Instances such as `Date`, `Map`, `Set`, and class instances are returned
untouched rather than being flattened into plain record data. Inherited and non-enumerable
properties are skipped, and symbol-keyed properties are carried over.

### The two are not inverses

`recursiveUndefinedToNull` **keeps** its properties and writes `null` in place, so they survive
`JSON.stringify`, which would otherwise omit them. `recursiveNullToUndefined` **drops** its
nullish properties, because `JSON.stringify` omits `undefined` either way and a dropped key reads
more honestly than one that is present but empty.

```ts
recursiveUndefinedToNull({ a: undefined, b: 'hello' }); // => { a: null, b: 'hello' }
recursiveNullToUndefined({ a: null, b: 'hello' }); // => { b: 'hello' }

// So a `null` property is not recovered by converting back:
recursiveUndefinedToNull(recursiveNullToUndefined({ a: null })); // => {}
```

`recursiveNullToUndefined` marks every property it may drop as optional in its result type, so
`'a' in result` is the reliable way to test for one.

Array items, by contrast, round trip cleanly, because their positions are preserved:

```ts
recursiveUndefinedToNull(recursiveNullToUndefined([null, 'hello'])); // => [null, 'hello']
```
