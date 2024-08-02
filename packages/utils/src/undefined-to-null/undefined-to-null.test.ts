/* eslint-disable unicorn/no-null */
/* eslint-disable unicorn/no-useless-undefined */
import { assertType, describe, expect, it } from 'vitest';
import type { UndefinedToNull, UndefinedToNullRecursive } from './types.js';
import { recursiveUndefinedToNull, undefinedToNull } from './undefined-to-null.js';

describe('undefinedAsNull', () => {
  it('returns `null` when passed `undefined`', () => {
    const result = undefinedToNull(undefined);
    assertType<UndefinedToNull<undefined>>(result);
    expect(result).toBeNull();
  });

  it('returns `null` when passed `null`', () => {
    const result = undefinedToNull(null);
    assertType<UndefinedToNull<null>>(result);
    expect(result).toBeNull();
  });

  it('returns `null` when passed nothing', () => {
    const result = undefinedToNull();
    expect(result).toBeNull();
  });

  it('should not convert null to undefined', () => {
    const value = null;
    const result = undefinedToNull(value);
    assertType<UndefinedToNull<null>>(result);
    expect(result).toBe(null);
  });
});

describe('recursiveUndefinedToNull', () => {
  it('replaces `undefined` values `null` inside an object, leaving other values unchanged', () => {
    const object = {
      a: undefined,
      b: 'hello',
      c: undefined,
    };
    const result = recursiveUndefinedToNull(object);
    assertType<UndefinedToNullRecursive<typeof object>>(result);
    expect(result).toEqual({
      a: null,
      b: 'hello',
      c: null,
    });
  });

  it('replaces `undefined` values with `null` inside nested objects, leaving other values unchanged', () => {
    const object = {
      a: {
        b: undefined,
        c: 'hello',
      },
      d: undefined,
    };
    const result = recursiveUndefinedToNull(object);
    assertType<UndefinedToNullRecursive<typeof object>>(result);
    expect(result).toEqual({
      a: {
        b: null,
        c: 'hello',
      },
      d: null,
    });
  });

  it('replaces `undefined` values with `null` inside arrays, leaving other values unchanged', () => {
    const array = [undefined, 'hello', undefined];
    const result = recursiveUndefinedToNull(array);
    assertType<UndefinedToNullRecursive<typeof array>>(result);
    expect(result).toEqual([null, 'hello', null]);
  });

  it('replaces `undefined` values with `null` inside nested arrays, leaving other values unchanged', () => {
    const array = [undefined, ['hello', undefined], undefined];
    const result = recursiveUndefinedToNull(array);
    assertType<UndefinedToNullRecursive<typeof array>>(result);
    expect(result).toEqual([null, ['hello', null], null]);
  });

  it('replaces `undefined` values with `null` inside an array of objects, leaving other values unchanged', () => {
    const array = [{ a: undefined, b: 'hello', c: undefined }, { d: undefined }];
    const result = recursiveUndefinedToNull(array);
    assertType<UndefinedToNullRecursive<typeof array>>(result);
    expect(result).toEqual([{ a: null, b: 'hello', c: null }, { d: null }]);
  });
});
