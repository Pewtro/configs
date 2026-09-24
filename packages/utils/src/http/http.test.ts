/* eslint-disable sonarjs/parameterized-tests, unicorn/prefer-https */
import { describe, it } from 'vitest';
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
    it("doesn't add / at start when passed path doesn't start with / and baseUrl doesn't end with /", ({ expect }) => {
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
    it("doesn't add / at start when passed path doesn't start with / and baseUrl doesn't end with /", ({ expect }) => {
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
    it("doesn't add / at start when passed path doesn't start with / and baseUrl doesn't end with /", ({ expect }) => {
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
