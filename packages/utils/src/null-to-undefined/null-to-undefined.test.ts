// oxlint-disable unicorn/no-useless-undefined
/* eslint-disable unicorn/no-null */
import { assertType, describe, expect, expectTypeOf, it } from 'vitest';
import type { NullToUndefined, NullToUndefinedRecursive } from './types';
import { nullToUndefined, recursiveNullToUndefined } from '.';

describe('nullToUndefined', () => {
  it('returns `undefined` when passed `null`', () => {
    const result = nullToUndefined(null);
    assertType<NullToUndefined<null>>(result);
    expect(result).toBeUndefined();
  });

  it('returns `undefined` when passed `undefined`', () => {
    // eslint-disable-next-line sonarjs/no-undefined-argument
    const result = nullToUndefined(undefined);
    assertType<NullToUndefined<undefined>>(result);
    expect(result).toBeUndefined();
  });

  it('returns `undefined` when passed nothing', () => {
    const result = nullToUndefined();
    expect(result).toBeUndefined();
  });

  it('returns the original value when passed any value', () => {
    const value = 'hello';
    const result = nullToUndefined(value);
    assertType<NullToUndefined<string>>(result);
    expect(result).toBe(value);
  });
});

describe('recursiveNullToUndefined', () => {
  it('removes properties that are `null` or `undefined` inside an object, leaving other values unchanged', () => {
    const object = {
      a: null,
      b: 'hello',
      c: null,
      d: undefined,
    };
    const result = recursiveNullToUndefined(object);
    assertType<NullToUndefinedRecursive<typeof object>>(result);
    expect(result).toStrictEqual({ b: 'hello' });
    expect(Object.keys(result)).toStrictEqual(['b']);
  });
  it('removes nested properties that are `null` or `undefined`, leaving other values unchanged', () => {
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
    expect(result).toStrictEqual({ a: { c: 'hello' } });
  });
  it('replaces `null` values with `undefined` inside an array, leaving other values unchanged', () => {
    const array = [null, 'hello', null, undefined];
    const result = recursiveNullToUndefined(array);
    assertType<NullToUndefinedRecursive<typeof array>>(result);
    expect(result).toStrictEqual([undefined, 'hello', undefined, undefined]);
  });
  it('replaces `null` values with `undefined` inside nested arrays, leaving other values unchanged', () => {
    const array = [[null, 'hello', null, undefined]];
    const result = recursiveNullToUndefined(array);
    assertType<NullToUndefinedRecursive<typeof array>>(result);
    expect(result).toStrictEqual([[undefined, 'hello', undefined, undefined]]);
  });

  it('preserves non-plain object instances such as `Date`', () => {
    const createdAt = new Date('2024-01-01T00:00:00.000Z');
    const object = { createdAt, other: null };
    const result = recursiveNullToUndefined(object);
    assertType<NullToUndefinedRecursive<typeof object>>(result);
    expect(result).toStrictEqual({ createdAt });
  });

  it('removes properties that are `null` or `undefined` inside an array of objects', () => {
    const array = [{ a: null, b: 'hello', c: null, d: undefined }];
    const result = recursiveNullToUndefined(array);
    assertType<NullToUndefinedRecursive<typeof array>>(result);
    expect(result).toStrictEqual([{ b: 'hello' }]);
  });

  it('makes properties that convert to `undefined` optional and keeps the rest required', () => {
    const object = { a: null, b: 'hello' };
    const result = recursiveNullToUndefined(object);
    // A property that may be absent does not satisfy the same property when required.
    type IsOptional<Property extends keyof typeof result> =
      Pick<typeof result, Property> extends Required<Pick<typeof result, Property>> ? false : true;

    // `a` is dropped entirely so it has to be optional, while `b` is always present.
    expectTypeOf<IsOptional<'a'>>().toEqualTypeOf<true>();
    expectTypeOf<IsOptional<'b'>>().toEqualTypeOf<false>();
    expect(result.a).toBeUndefined();
    expect(result.b).toBe('hello');
  });
});
