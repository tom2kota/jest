# [jest](https://jestjs.io/) => [documentation](https://jestjs.io/docs/en/getting-started.html)

Quiz with Jest (JavaScript framework)


-----------------

## JS Playground

[JSPlayground](https://stephengrider.github.io/JSPlaygrounds/)


-----------------

### Global install
``` 
npm i --save-dev jest babel-jest @babel/core @babel/preset-env
npm i -g jest
```

``` 
jest quiz/reversestring/test.js --watch
```

-------

### Local install

``` 
npm i jest babel-jest @babel/core @babel/preset-env
npm i jest
```

```
import {expect, test} from "@jest/globals";
import reverse from "./index";

test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
});

```