## Hooks

# Below is a JSX block

# Below is a JSX block

# Below is a JSX block

<div style={{ padding: '10px 30px', backgroundColor: 'tomato' }}>
  <h2>Try making this heading have the color green</h2>
</div>

```tsx
import { NextComponentType } from "next";
import { AppContext, AppProps } from "next/app";
// import "../styles/bootstrap.min.css";
import "../styles/app.scss";
export interface ModifiedAppInitialProps<A = { [key in string]: string }> {
  appProps: A;
}

export interface ExtendedAppProps<
  P = { [key in string]: string },
  A = { [key in string]: string }
> extends AppProps<P>,
    ModifiedAppInitialProps<A> {}

const AppCom: NextComponentType<
  AppContext,
  ModifiedAppInitialProps,
  ExtendedAppProps
> = ({ Component, pageProps, appProps }) => {
  return <Component {...appProps} {...pageProps} />;
};

export default AppCom;
```

```sh

```

```scss
.container {
}
```

```ts
const ss = "12341";
```

```js
const ss = "12341";
```

```go
package main

func main() {

}
```

```json
{
  "name": "shineshao"
}
```

```c
#include <stdio>;
init main() {

}
```
