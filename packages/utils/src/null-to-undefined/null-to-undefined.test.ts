/* eslint-disable unicorn/no-useless-undefined */
/* eslint-disable unicorn/no-null */
import { assertType, describe, expect, it } from 'vitest';
import { nullToUndefined, recursiveNullToUndefined } from './null-to-undefined';
import type { NullToUndefined, NullToUndefinedRecursive } from './types';

describe('nullToUndefined', () => {
  it('returns `undefined` when passed `null`', () => {
    const result = nullToUndefined(null);
    assertType<NullToUndefined<null>>(result);
    expect(result).toBeUndefined();
  });

  it('returns `undefined` when passed `undefined`', () => {
    const result = nullToUndefined(undefined);
    assertType<NullToUndefined<undefined>>(result);
    expect(result).toBeUndefined();
  });

  it('returns `undefined` when passed nothing', () => {
    const result = nullToUndefined();
    expect(result).toBeUndefined();
  });

  it('should not convert undefined to null', () => {
    const value = undefined;
    const result = nullToUndefined(value);
    assertType<NullToUndefined<undefined>>(result);
    expect(result).toBe(undefined);
  });

  it('returns the original value when passed any value', () => {
    const value = 'hello';
    const result = nullToUndefined(value);
    assertType<NullToUndefined<string>>(result);
    expect(result).toBe(value);
  });
});

describe('recursiveNullToUndefined', () => {
  it('replaces `null` values `undefined` inside an object, leaving other values unchanged', () => {
    const object = {
      a: null,
      b: 'hello',
      c: null,
      d: undefined,
    };
    const result = recursiveNullToUndefined(object);
    assertType<NullToUndefinedRecursive<typeof object>>(result);
    expect(result).toEqual({
      a: undefined,
      b: 'hello',
      c: undefined,
      d: undefined,
    });
  });
  it('replaces `null` values with `undefined` inside nested objects, leaving other values unchanged', () => {
    const object = {
      a: {
        b: null,
        c: 'hello',
        d: null,
        e: undefined,
      },
    };
    const result = recursiveNullToUndefined(object);
    assertType<NullToUndefinedRecursive<typeof object>>(result);
    expect(result).toEqual({
      a: {
        b: undefined,
        c: 'hello',
        d: undefined,
        e: undefined,
      },
    });
  });
  it('replaces `null` values with `undefined` inside an array, leaving other values unchanged', () => {
    const array = [null, 'hello', null, undefined];
    const result = recursiveNullToUndefined(array);
    assertType<NullToUndefinedRecursive<typeof array>>(result);
    expect(result).toEqual([undefined, 'hello', undefined, undefined]);
  });
  it('replaces `null` values with `undefined` inside nested arrays, leaving other values unchanged', () => {
    const array = [[null, 'hello', null, undefined]];
    const result = recursiveNullToUndefined(array);
    assertType<NullToUndefinedRecursive<typeof array>>(result);
    expect(result).toEqual([[undefined, 'hello', undefined, undefined]]);
  });
  it('replaces `null` values with `undefined` inside an array of objects, leaving other values unchanged', () => {
    const array = [{ a: null, b: 'hello', c: null, d: undefined }];
    const result = recursiveNullToUndefined(array);
    assertType<NullToUndefinedRecursive<typeof array>>(result);
    expect(result).toEqual([{ a: undefined, b: 'hello', c: undefined, d: undefined }]);
  });
});
