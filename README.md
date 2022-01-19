# eslint-plugin-replace-relative-paths

This plugin need to replace relative paths to absolute

## Short description

This plugin need to modify imports like these

```typescript
import { asdf, dd123234, test } from "../../core/src/test";
import { asdf, dd123234, test } from "../../core/src/test";
import { asdf, dd123234, test } from "../../core/src/test";
```

to

```typescript
import { asdf, dd123234, test } from "@absoluteName/core/src/test";
import { asdf, dd123234, test } from "@absoluteName/core/src/test";
import { asdf, dd123234, test } from "@absoluteName/core/src/test";
```

## Installation

You'll first need to install [ESLint](http://eslint.org):

```bash
npm i eslint --save-dev
```

Next, install `eslint-plugin-replace-relative-paths`:

```bash
npm install eslint-plugin-replace-relative-paths --save-dev
```


## Usage

Add `replace-relative-paths` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "replace-relative-paths"
    ]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "replace-relative-paths/imports": [
            1,
            {
                rootAlias: '@absoluteName',
                paths: [ 'core/src' ],
            },
        ]
    }
}
```

## Recommendation

I recommend eslint-plugin for sort imports, [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
