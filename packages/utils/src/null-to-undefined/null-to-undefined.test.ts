// oxlint-disable unicorn/no-useless-undefined
/* eslint-disable unicorn/no-null */
import { assertType, describe, expect, expectTypeOf, it } from 'vitest';
import type { NullToUndefined, NullToUndefinedRecursive } from './types.js';
import { nullToUndefined, recursiveNullToUndefined } from './index.js';

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

  it('preserves symbol keyed properties', () => {
    const key = Symbol('id');
    const object = { b: 'hello', [key]: 'abc' };
    const result = recursiveNullToUndefined(object);
    assertType<NullToUndefinedRecursive<typeof object>>(result);
    expect(Object.getOwnPropertySymbols(result)).toStrictEqual([key]);
    expect(result[key]).toBe('abc');
  });

  it('omits symbol keyed properties that are `null` or `undefined`', () => {
    const key = Symbol('id');
    const object = { b: 'hello', [key]: null };
    const result = recursiveNullToUndefined(object);
    expect(Object.getOwnPropertySymbols(result)).toStrictEqual([]);
  });

  it('ignores non-enumerable properties', () => {
    const object: Record<string, unknown> = { visible: 'yes' };
    Object.defineProperty(object, 'hidden', { enumerable: false, value: 'no' });
    const result = recursiveNullToUndefined(object);
    expect(Object.getOwnPropertyNames(result)).toStrictEqual(['visible']);
  });

  it('leaves objects that are not plain untouched', () => {
    const object = Object.assign(Object.create({ inherited: 'no' }) as Record<string, unknown>, { own: null });
    const result = recursiveNullToUndefined(object);
    // A custom prototype makes this a class-like instance, so it is returned as-is.
    expect(result).toBe(object);
  });
});
