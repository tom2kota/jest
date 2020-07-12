import maxKeyValue from "./index";
import {expect, test} from "@jest/globals";

test('maxChar function exists', () => {
    expect(typeof maxKeyValue).toEqual('function');
});

test('Finds the most frequently used char', () => {
    expect(maxKeyValue('a')).toEqual('a');
    expect(maxKeyValue('abcdefghijklmnaaaaa')).toEqual('a');
});

test('Works with numbers in the string', () => {
    expect(maxKeyValue('ab1c1d1e1f1g1')).toEqual('1');
});
