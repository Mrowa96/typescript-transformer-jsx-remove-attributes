# typescript-transformer-jsx-remove-attributes

This transformer allows you to remove one or many jsx attributes during compile time.
It can be useful if you want to remove e.g. `data-testid` attribute.

## How to use?

You could use it with [webpack](https://github.com/webpack]) and [ts-loader](https://github.com/TypeStrong/ts-loader) like that:

1. First import transformer e.g. `const removeJsxAttributesTransformer = require('typescript-transformer-jsx-remove-attributes');`
2. After that, modify your `ts-loader` configuration:

```js
 {
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    options: {
        getCustomTransformers: () => ({ before: [removeJsxAttributesTransformer(['data-testid', /* any other attribute */])] })
    }
}
```
