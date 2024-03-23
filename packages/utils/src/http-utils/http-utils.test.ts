/* eslint-disable sonarjs/no-duplicate-string */
import { describe, expect, it } from 'vitest';
import { generatePath } from './http-utils.js';

const testingUrl = 'https://github.com';

describe('generatePath with :', () => {
  it('should maintain the prefix / when passed path starts with / and baseUrl does not exist', () => {
    const result = generatePath('/users/:userId/posts/:postId', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  it('removes ending / when passed path that ends with /', () => {
    const result = generatePath('/users/:userId/posts/:postId/', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  it("doesn't add / at start when passed path doesn't start with /", () => {
    const result = generatePath('users/:userId/posts/:postId', { userId: '1', postId: '2' });
    expect(result).toBe('users/1/posts/2');
  });
  it('keeps starting / and removes ending / when passed path starts with / and ends with /', () => {
    const result = generatePath('/users/:userId/posts/:postId/', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  describe('with baseurl', () => {
    it('should maintain the prefix / when passed path starts with / and baseUrl does not end with /', () => {
      const result = generatePath('/users/:userId/posts/:postId', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("keeps starting / and removes ending / when passed path starts with / and ends with / and baseUrl doesn't end with /", () => {
      const result = generatePath('/users/:userId/posts/:postId/', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("removes ending / when passed path that ends with / and baseUrl doesn't end with /", () => {
      const result = generatePath('/users/:userId/posts/:postId/', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("doesn't add / at start when passed path doesn't start with / and baseUrl doesn't end with /", () => {
      const result = generatePath('users/:userId/posts/:postId', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
  });
});

describe('generatePath with {}', () => {
  it('should maintain the prefix / when passed path starts with / and baseUrl does not exist', () => {
    const result = generatePath('/users/{userId}/posts/{postId}', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  it('removes ending / when passed path that ends with /', () => {
    const result = generatePath('/users/{userId}/posts/{postId}/', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  it("doesn't add / at start when passed path doesn't start with /", () => {
    const result = generatePath('users/{userId}/posts/{postId}', { userId: '1', postId: '2' });
    expect(result).toBe('users/1/posts/2');
  });
  it('keeps starting / and removes ending / when passed path starts with / and ends with /', () => {
    const result = generatePath('/users/{userId}/posts/{postId}/', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  describe('with baseurl', () => {
    it('should maintain the prefix / when passed path starts with / and baseUrl does not end with /', () => {
      const result = generatePath('/users/{userId}/posts/{postId}', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("keeps starting / and removes ending / when passed path starts with / and ends with / and baseUrl doesn't end with /", () => {
      const result = generatePath('/users/{userId}/posts/{postId}/', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("removes ending / when passed path that ends with / and baseUrl doesn't end with /", () => {
      const result = generatePath('/users/{userId}/posts/{postId}/', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("doesn't add / at start when passed path doesn't start with / and baseUrl doesn't end with /", () => {
      const result = generatePath('users/{userId}/posts/{postId}', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
  });
});

describe('generatePath with mixed : and {}', () => {
  it('should maintain the prefix / when passed path starts with / and baseUrl does not exist', () => {
    const result = generatePath('/users/:userId/posts/{postId}', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  it('removes ending / when passed path that ends with /', () => {
    const result = generatePath('/users/:userId/posts/{postId}/', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  it("doesn't add / at start when passed path doesn't start with /", () => {
    const result = generatePath('users/:userId/posts/{postId}', { userId: '1', postId: '2' });
    expect(result).toBe('users/1/posts/2');
  });
  it('keeps starting / and removes ending / when passed path starts with / and ends with /', () => {
    const result = generatePath('/users/:userId/posts/{postId}/', { userId: '1', postId: '2' });
    expect(result).toBe('/users/1/posts/2');
  });
  describe('with baseurl', () => {
    it('should maintain the prefix / when passed path starts with / and baseUrl does not end with /', () => {
      const result = generatePath('/users/:userId/posts/{postId}', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("keeps starting / and removes ending / when passed path starts with / and ends with / and baseUrl doesn't end with /", () => {
      const result = generatePath('/users/:userId/posts/{postId}/', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("removes ending / when passed path that ends with / and baseUrl doesn't end with /", () => {
      const result = generatePath('/users/:userId/posts/{postId}/', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
    it("doesn't add / at start when passed path doesn't start with / and baseUrl doesn't end with /", () => {
      const result = generatePath('users/:userId/posts/{postId}', { userId: '1', postId: '2' }, testingUrl);
      expect(result).toBe(`${testingUrl}/users/1/posts/2`);
    });
  });
});
