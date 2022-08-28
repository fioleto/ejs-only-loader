# ejs-only-loader

ejs loader for webpack@5.  
this loader is only rendering ejs.

## Install

```shell
npm i -D git+https://github.com/fioleto/ejs-only-loader.git
```



## Usege

Rules section of webpack.config.js

```javascript
{
	loader: 'ejs-only-loader',
	options: {
		ejsData: {}
}
```



## Options

* ejsData

A data that pass over ejs render as argument. can be

```typescript
 Record<string, any> | {(this: LoaderContext<Options>): Record<string, any>}
```



## License

MIT