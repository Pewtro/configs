/* eslint-disable unicorn/no-null */
import { describe, it } from 'vitest';
import { recursiveNullToUndefined } from './null-to-undefined/index.js';
import { recursiveUndefinedToNull } from './undefined-to-null/index.js';

/**
 * `recursiveUndefinedToNull` keeps every property so that it survives `JSON.stringify`, whereas
 * `recursiveNullToUndefined` drops the properties that were `null` or `undefined`. The two are
 * therefore deliberately not inverses of each other. These tests pin that difference so it cannot
 * be changed by accident.
 */
describe('recursiveNullToUndefined and recursiveUndefinedToNull', () => {
  it('keeps properties that were `undefined` when converting to `null`', ({ expect }) => {
    expect(recursiveUndefinedToNull({ a: undefined, b: 'hello' })).toStrictEqual({ a: null, b: 'hello' });
  });

  it('drops properties that were `null` when converting to `undefined`', ({ expect }) => {
    expect(recursiveNullToUndefined({ a: null, b: 'hello' })).toStrictEqual({ b: 'hello' });
  });

  it('loses a `null` property when converted to `undefined` and back', ({ expect }) => {
    const object = { a: null, b: 'hello' };
    expect(recursiveUndefinedToNull(recursiveNullToUndefined(object))).toStrictEqual({ b: 'hello' });
  });

  it('produces the same JSON as explicitly setting the property to `undefined`', ({ expect }) => {
    const object = { a: null, b: 'hello' };
    const dropped = recursiveNullToUndefined(object);
    const explicit = { ...object, a: undefined };
    expect(JSON.stringify(dropped)).toBe(JSON.stringify(explicit));
    expect(JSON.stringify(dropped)).toBe('{"b":"hello"}');
  });

  it('round trips array items because positions are preserved', ({ expect }) => {
    expect(recursiveUndefinedToNull(recursiveNullToUndefined([null, 'hello']))).toStrictEqual([null, 'hello']);
  });
});
