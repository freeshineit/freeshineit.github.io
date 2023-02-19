---
title: Typescript 类型操作
summary: Typescript 类型操作 Type Interface Generics, Partial、Required、Readonly、Pick ...
tags: [Typescript]  #设置标签
date: 2020-11-21 09:25:00
keywords: Typescript
categories:
- Typescript
img: /images/cover/ts.jpg  #设置本地图片
coverImg: /images/cover/ts-banner.jpg  #设置本地图片
---

## Ts 类型操作

- Partial (部分, 把所有字段转为可选字段)

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

example：

```ts
type partial = {
  name: string;
  getName(): string;
};

/**
 * TPartial 结果
 * {
 *   name?: string
 *   getName()?: string
 * }
 */
type TPartial = Partial<partial>;
```

- Required (需要, 把所有字段转为必选字段)

```ts
/**
 * Make all properties in T required
 */
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

example:

```ts
type required = {
  name?: string;
  getName(): string;
};

/**
 * TRequired 结果
 * {
 *   name: string
 *   getName(): string
 * }
 */
type TRequired = Required<required>;
```

- Readonly (只读，把所有字段转为只读字段)

```ts
/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

example:

```ts
type Treadonly = {
  name?: string;
  getName(): string;
};

/**
 * TReadonly 结果
 * {
 *   readonly name?: string
 *   readonly getName(): string
 * }
 */
type TReadonly = Readonly<Treadonly>;
```

- Pick (挑选, 挑选指定的字段)

```ts
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

example:

```ts
type pick = {
  name?: string;
  age: number;
  getName(): string;
};

/**
 * TPick 结果
 * {
 *   name?: string
 *   age: number
 * }
 */
type TPick = Pick<pick, "name" | "age">;
```

- Record(记录,将 K 中所有的属性的值转化为 T 类型)

```ts
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

example:

```ts
type record = {
  name?: string;
  age: number;
  getName(): string;
};

/**
 * TRecord 结果
 * {
 *   name: string
 *   age: string
 *   getName: string
 * }
 */
type TRecord = Record<keyof record, string>;

/**
 * Ta 结果
 * {
 *   a: number
 *   b: number
 *   c: number
 *   1: number
 * }
 */
type Ta = Record<"a" | "b" | "c" | 1, number>;
```

- Exclude(排除,从 T 中排除那些可分配给 U 的类型，)

```ts
/**
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T;
```

example:

```ts
type T = Exclude<1 | 2, 1 | 3>; // -> 2
```

- Extract(提取,从 T 中提取可分配给 U 的类型， 交集)

```ts
/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;
```

example:

```ts
type T = Extract<1 | 2, 1 | 3>; // -> 1
```

- Omit (删去, 构造一个除 K 类型外具有 T 属性的类型。)

```ts
/**
 * Construct a type with the properties of T except for those in type K.
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

example:

```ts
interface Person {
  name: string;
  age: number;
  location: string;
}

/**
 * OmitPerson 结果
 * {
 *   location: string
 * }
 */
type OmitPerson = Omit<Person, "name" | "age">;
```

- 数组

```ts
/** arr1Example 中只可以使用`string`类型填充 */
type arr1 = string[]; // 建议使用[]
const arr1Example: arr1 = ["123", "23454"];

/** arr2Example 中只可以使用[`string`,`number`]类型填充，必须按顺序填充, 个数也有限制 */
type arr2 = [string, number];
const arr2Example: arr2 = ["0", 1];

/** arr3Example 中只可以使用`string`或`number`类型填充，没有顺序要求 */
type arr3 = (string | number)[];
const arr3Example: arr3 = [0, "1", "2", 3, 4];
```

- 对象

```ts
interface Persion<T> {
  [key: T]: T;
}
```

- extends

- keyof (对于任何类型 `T`， `keyof T`的结果为 `T`上已知的公共属性名的联合)

```ts
interface Person {
  name: string;
  age: number;
}

type p = keyof Person; // -> p = 'name' | 'age'
```

- typeof

```ts

```

- 交叉类型 (交叉类型是将多个类型合并为一个类型)

```ts
interface;
```

- 联合类型 (联合类型表示一个值可以是几种类型之一,用竖线`｜`分隔每个类型)

```ts
function getNum(num: number | string): number {
  return +num;
}
```

- 索引类型

```ts

```

- 映射类型

```ts

```

- @4.1

```ts
  // @4.1
type Getters<T> = {
  //
  [K in keyof T as `get${capitalize K}`]: () => T[K]
}

interface Person {
	name: string;
	age: number;
	location: string;
}

/**
* LazyPerson 结果
* {
*   name: string
*   age: number
*   location: string
*   getName: () => string
*   getAge: () => number
*   getLocation: () => string
* }
*/
type LazyPerson = Getters<Person>;
```

- React 中的类型约束

  - FC (函数组件类型)

  ```tsx
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
  }

  type FC<P = {}> = FunctionComponent<P>;

  // 具体使用
  interface IProps {}
  const App: FC<IProps> = props => <div>{props.children}</div>;
  ```

  - useState

    React 中使用`useState`方法去设置 state

  ```tsx
  function useState<S>(
    initialState: S | (() => S)
  ): [S, Dispatch<SetStateAction<S>>];
  ```
