/* eslint-disable sonarjs/no-undefined-argument */
/* eslint-disable unicorn/no-null */
import { assertType, describe, expect, it } from 'vitest';
import type { UndefinedToNull, UndefinedToNullRecursive } from './types.js';
import { recursiveUndefinedToNull, undefinedToNull } from './index.js';

describe('undefinedAsNull', () => {
  it('returns `null` when passed `undefined`', () => {
    // oxlint-disable-next-line unicorn/no-useless-undefined
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
    expect(result).toBeNull();
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

  it('keeps `null` values as `null` when nested inside objects', () => {
    const object = { a: null, b: { c: undefined, d: null } };
    const result = recursiveUndefinedToNull(object);
    assertType<UndefinedToNullRecursive<typeof object>>(result);
    expect(result).toEqual({ a: null, b: { c: null, d: null } });
  });

  it('returns `null` when passed `null`', () => {
    const result = recursiveUndefinedToNull(null);
    assertType<UndefinedToNullRecursive<null>>(result);
    expect(result).toBeNull();
  });

  it('preserves non-plain object instances such as `Date`', () => {
    const createdAt = new Date('2024-01-01T00:00:00.000Z');
    const object = { createdAt, other: undefined };
    const result = recursiveUndefinedToNull(object);
    assertType<UndefinedToNullRecursive<typeof object>>(result);
    expect(result).toEqual({ createdAt, other: null });
  });

  it('replaces `undefined` values with `null` inside an array of objects, leaving other values unchanged', () => {
    const array = [{ a: undefined, b: 'hello', c: undefined }, { d: undefined }];
    const result = recursiveUndefinedToNull(array);
    assertType<UndefinedToNullRecursive<typeof array>>(result);
    expect(result).toEqual([{ a: null, b: 'hello', c: null }, { d: null }]);
  });
});
