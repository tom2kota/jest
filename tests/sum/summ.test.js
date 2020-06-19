import sum from "./summ";
import {expect, test} from "@jest/globals";

test('adds 10 + 10 = 20', () => expect(sum(10, 10)).toBe(20))
