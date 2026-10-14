/* eslint-disable sonarjs/parameterized-tests, unicorn/prefer-https */
import { assertType, describe, it } from 'vitest';
import { generatePath } from './index.js';

const testingUrl = 'https://github.com';

describe.concurrent('generatePath with :', () => {
  it('should maintain the prefix / when passed path starts with / and baseUrl does not exist', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/:postId', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  it('removes ending / when passed path that ends with /', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/:postId/', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  it("doesn't add / at start when passed path doesn't start with /", ({ expect }) => {
    const result = generatePath('users/:userId/posts/:postId', { postId: '2', userId: '1' });
    expect(result).toBe('users/1/posts/2');
  });
  it('keeps starting / and removes ending / when passed path starts with / and ends with /', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/:postId/', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  describe.concurrent('with baseurl', () => {
    it('should maintain the prefix / when passed path starts with / and baseUrl does not end with /', ({ expect }) => {
      const result = generatePath('/users/:userId/posts/:postId', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("keeps starting / and removes ending / when passed path starts with / and ends with / and baseUrl doesn't end with /", ({
      expect,
    }) => {
      const result = generatePath('/users/:userId/posts/:postId/', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("removes ending / when passed path that ends with / and baseUrl doesn't end with /", ({ expect }) => {
      const result = generatePath('/users/:userId/posts/:postId/', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it('adds only the base URL separator slash when the path has no leading slash', ({ expect }) => {
      const result = generatePath('users/:userId/posts/:postId', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
  });
});

describe.concurrent('generatePath with hyphenated params', () => {
  it('supports :user-id parameter names', ({ expect }) => {
    const result = generatePath('/users/:user-id/posts/:postId', { postId: '2', 'user-id': '1' });
    expect(result).toBe('/users/1/posts/2');
  });

  it('supports {user-id} parameter names', ({ expect }) => {
    const result = generatePath('/users/{user-id}/posts/{postId}', { postId: '2', 'user-id': '1' });
    expect(result).toBe('/users/1/posts/2');
  });
});

describe.concurrent('generatePath with dotted params', () => {
  it('supports :user.id parameter names', ({ expect }) => {
    const result = generatePath('/users/:user.id/posts/:postId', { postId: '2', 'user.id': '1' });
    expect(result).toBe('/users/1/posts/2');
  });

  it('supports {user.id} parameter names', ({ expect }) => {
    const result = generatePath('/users/{user.id}/posts/{postId}', { postId: '2', 'user.id': '1' });
    expect(result).toBe('/users/1/posts/2');
  });
});

describe.concurrent('generatePath with optional params', () => {
  it('omits optional :postId? segment when the value is missing', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/:postId?', { userId: '1' });
    expect(result).toBe('/users/1/posts');
  });

  it('includes optional :postId? segment when the value is present', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/:postId?', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });

  it('omits optional {postId?} segment when the value is missing', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/{postId?}', { userId: '1' });
    expect(result).toBe('/users/1/posts');
  });

  it('includes optional {postId?} segment when the value is present', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/{postId?}', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
});

describe.concurrent('generatePath with {}', () => {
  it('should maintain the prefix / when passed path starts with / and baseUrl does not exist', ({ expect }) => {
    const result = generatePath('/users/{userId}/posts/{postId}', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  it('removes ending / when passed path that ends with /', ({ expect }) => {
    const result = generatePath('/users/{userId}/posts/{postId}/', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  it("doesn't add / at start when passed path doesn't start with /", ({ expect }) => {
    const result = generatePath('users/{userId}/posts/{postId}', { postId: '2', userId: '1' });
    expect(result).toBe('users/1/posts/2');
  });
  it('keeps starting / and removes ending / when passed path starts with / and ends with /', ({ expect }) => {
    const result = generatePath('/users/{userId}/posts/{postId}/', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  describe.concurrent('with baseurl', () => {
    it('should maintain the prefix / when passed path starts with / and baseUrl does not end with /', ({ expect }) => {
      const result = generatePath('/users/{userId}/posts/{postId}', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("keeps starting / and removes ending / when passed path starts with / and ends with / and baseUrl doesn't end with /", ({
      expect,
    }) => {
      const result = generatePath('/users/{userId}/posts/{postId}/', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("removes ending / when passed path that ends with / and baseUrl doesn't end with /", ({ expect }) => {
      const result = generatePath('/users/{userId}/posts/{postId}/', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it('adds only the base URL separator slash when the path has no leading slash', ({ expect }) => {
      const result = generatePath('users/{userId}/posts/{postId}', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
  });
});

describe.concurrent('generatePath with mixed : and {}', () => {
  it('should maintain the prefix / when passed path starts with / and baseUrl does not exist', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/{postId}', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  it('removes ending / when passed path that ends with /', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/{postId}/', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  it("doesn't add / at start when passed path doesn't start with /", ({ expect }) => {
    const result = generatePath('users/:userId/posts/{postId}', { postId: '2', userId: '1' });
    expect(result).toBe('users/1/posts/2');
  });
  it('keeps starting / and removes ending / when passed path starts with / and ends with /', ({ expect }) => {
    const result = generatePath('/users/:userId/posts/{postId}/', { postId: '2', userId: '1' });
    expect(result).toBe('/users/1/posts/2');
  });
  describe.concurrent('with baseurl', () => {
    it('should maintain the prefix / when passed path starts with / and baseUrl does not end with /', ({ expect }) => {
      const result = generatePath('/users/:userId/posts/{postId}', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("keeps starting / and removes ending / when passed path starts with / and ends with / and baseUrl doesn't end with /", ({
      expect,
    }) => {
      const result = generatePath('/users/:userId/posts/{postId}/', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("removes ending / when passed path that ends with / and baseUrl doesn't end with /", ({ expect }) => {
      const result = generatePath('/users/:userId/posts/{postId}/', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it('adds only the base URL separator slash when the path has no leading slash', ({ expect }) => {
      const result = generatePath('users/:userId/posts/{postId}', { postId: '2', userId: '1' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
  });
});

describe.concurrent('generatePath with value types', () => {
  it('supports boolean and number parameter values', ({ expect }) => {
    const result = generatePath('/users/:userId/active/:active/count/:count', {
      active: false,
      count: 2,
      userId: 0,
    });

    expect(result).toBe('/users/0/active/false/count/2');
  });

  it('encodes parameter values', ({ expect }) => {
    const result = generatePath('/search/:query', { query: 'two words/with symbols' });

    expect(result).toBe('/search/two%20words%2Fwith%20symbols');
  });
});

describe.concurrent('generatePath with missing parameters', () => {
  it('allows the parameters argument to be omitted when all parameters are optional', ({ expect }) => {
    expect(generatePath('/users/:userId?/posts/{postId?}')).toBe('/users/posts');
  });

  it('omits an optional segment when its value is undefined or empty', ({ expect }) => {
    expect(generatePath('/users/:userId/posts/:postId?', { postId: '', userId: '1' })).toBe('/users/1/posts');
  });

  it('throws when a required parameter is missing', ({ expect }) => {
    //@ts-expect-error This is intended to have a type error
    expect(() => generatePath('/users/:userId/posts/:postId', { userId: '1' })).toThrow(
      'Missing required path parameter "postId" for path "/users/:userId/posts/:postId"',
    );
  });
});

describe.concurrent('generatePath with baseUrl protocols', () => {
  it('adds the default https protocol to a bare base URL', ({ expect }) => {
    expect(generatePath('/users/:userId', { userId: '1' }, 'api.example.com')).toBe('https://api.example.com/users/1');
  });

  it('uses the requested protocol for a bare base URL', ({ expect }) => {
    expect(generatePath('/users/:userId', { userId: '1' }, 'api.example.com', 'http')).toBe(
      'http://api.example.com/users/1',
    );
  });

  it('preserves an existing HTTP protocol', ({ expect }) => {
    expect(generatePath('/users/:userId', { userId: '1' }, 'http://api.example.com')).toBe(
      'http://api.example.com/users/1',
    );
  });

  it('does not duplicate slashes when the base URL ends with one', ({ expect }) => {
    expect(generatePath('/users/:userId', { userId: '1' }, 'https://api.example.com/')).toBe(
      'https://api.example.com/users/1',
    );
  });
});

describe.concurrent('generatePath with query strings', () => {
  it('passes a static query string through untouched', ({ expect }) => {
    expect(generatePath('/search?foo=bar')).toBe('/search?foo=bar');
  });

  it('substitutes a parameter that precedes a query string', ({ expect }) => {
    expect(generatePath('/users/:userId?foo=bar', { userId: '1' })).toBe('/users/1?foo=bar');
  });

  it('substitutes and encodes a parameter used as a query value', ({ expect }) => {
    const result = generatePath('/search?query=:term', { term: 'two words' });

    assertType<string>(result);
    expect(result).toBe('/search?query=two%20words');
  });

  it('substitutes parameters used as a query key and value', ({ expect }) => {
    expect(generatePath('/search?{query}=:term', { query: 'q', term: 'x' })).toBe('/search?q=x');
  });

  it('substitutes parameters across multiple query pairs', ({ expect }) => {
    expect(generatePath('/search?q=:query&page=:page', { page: 2, query: 'a b' })).toBe('/search?q=a%20b&page=2');
  });

  it('leaves colons that are not parameters untouched', ({ expect }) => {
    expect(generatePath('/time?at=12:30')).toBe('/time?at=12:30');
  });

  it('drops the whole pair when an optional query parameter has no value', ({ expect }) => {
    expect(generatePath('/search?term=:term?&page=1')).toBe('/search?page=1');
  });

  it('removes the query string when every pair is dropped', ({ expect }) => {
    expect(generatePath('/search?term=:term?')).toBe('/search');
  });

  it('removes empty pairs and a bare trailing question mark', ({ expect }) => {
    expect(generatePath('/search?a=1&&b=2')).toBe('/search?a=1&b=2');
    expect(generatePath('/search?')).toBe('/search');
  });

  it('treats the question mark of an optional parameter as a marker, not a query string', ({ expect }) => {
    expect(generatePath('/users/:userId?/posts?active=true', { userId: '1' })).toBe('/users/1/posts?active=true');
  });

  it('appends the query string after the base URL', ({ expect }) => {
    expect(generatePath('/users/:userId?foo=bar', { userId: '1' }, testingUrl)).toBe(`${testingUrl}/users/1?foo=bar`);
  });

  it('throws when a required query parameter is missing', ({ expect }) => {
    //@ts-expect-error This is intended to have a type error
    expect(() => generatePath('/search?query=:term')).toThrow(
      'Missing required path parameter "term" for path "/search?query=:term"',
    );
  });
});

describe.concurrent('generatePath with a root path', () => {
  it('does not emit a trailing slash when joined to a base URL', ({ expect }) => {
    expect(generatePath('/', {}, 'https://api.example.com')).toBe('https://api.example.com');
    expect(generatePath('/', {}, 'https://api.example.com/')).toBe('https://api.example.com');
  });

  it('does not emit a trailing slash for a base URL that has its own path', ({ expect }) => {
    expect(generatePath('/', {}, 'https://api.example.com/v1/')).toBe('https://api.example.com/v1');
  });

  it('resolves a root path without a base URL to an empty path', ({ expect }) => {
    expect(generatePath('/')).toBe('');
  });

  it('keeps the query string when the path portion resolves to nothing', ({ expect }) => {
    expect(generatePath('/?foo=bar', {}, 'https://api.example.com')).toBe('https://api.example.com?foo=bar');
    expect(generatePath('/?foo=:term', { term: 'x' }, 'https://api.example.com')).toBe('https://api.example.com?foo=x');
  });

  it('joins normally once the path has at least one segment', ({ expect }) => {
    expect(generatePath('/users', {}, 'https://api.example.com/')).toBe('https://api.example.com/users');
  });
});

describe.concurrent('generatePath with unresolvable templates', () => {
  // The runtime guard is the backstop for templates the types do not already reject, such as
  // JavaScript callers and paths that have widened to `string`.
  it('throws when a segment cannot be parsed as a single parameter', ({ expect }) => {
    //@ts-expect-error This is intended to have a type error
    expect(() => generatePath('/users/:user:id', { id: '2', user: '1' })).toThrow(
      'Unresolved parameter ":user:id" in path "/users/:user:id"',
    );
  });

  it('throws when a braced parameter is not the whole segment', ({ expect }) => {
    // The types see no parameter here, so this only reaches the runtime guard.
    expect(() => generatePath('/users/{user}id', { user: '1' })).toThrow(
      'Unresolved parameter "{user}id" in path "/users/{user}id"',
    );
  });

  it('throws even when the remaining segments are valid', ({ expect }) => {
    //@ts-expect-error This is intended to have a type error
    expect(() => generatePath('/users/:user:id/posts/:postId', { id: '2', postId: '3', user: '1' })).toThrow(
      'Unresolved parameter ":user:id" in path "/users/:user:id/posts/:postId"',
    );
  });
});
