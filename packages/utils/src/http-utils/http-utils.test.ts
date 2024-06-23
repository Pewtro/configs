/* eslint-disable sonarjs/no-duplicate-string */
import { describe, it } from 'vitest';
import { generatePath } from './http-utils.js';

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
