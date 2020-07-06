import reverse from "./index";
import {expect, test} from "@jest/globals";

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
});
