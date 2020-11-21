_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/rkc":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/typescript/type_operation",function(){return t("sNc7")}])},Op8E:function(e,n,t){"use strict";var a=t("q1tI"),r=t.n(a),l=t("8Kt/"),c=t.n(l),b=r.a.createElement,p=function(e){var n=e.meta;return b(r.a.Fragment,null,b(c.a,null,b("title",null,"".concat(n.title," (ShineShao)")),b("meta",{name:"description",content:n.description||"ShineShao \u535a\u5ba2"}),b("meta",{name:"keywords",content:"ShineShao freeshineit Next.js Blog "})))},s=r.a.createElement;n.a=function(e){var n=e.children,t=e.meta;return s(r.a.Fragment,null,s(p,{meta:t}),s("article",null,n))}},sNc7:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return s})),t.d(n,"default",(function(){return u}));var a=t("wx14"),r=t("Ff2n"),l=t("q1tI"),c=t.n(l),b=t("7ljp"),p=t("Op8E"),s=(c.a.createElement,{title:"Typescript \u7c7b\u578b\u64cd\u4f5c",description:"Typescript \u7c7b\u578b\u64cd\u4f5c Type Interface Generics ",date:"Aug 04, 2020"}),i={meta:s},o=function(e){var n=e.children;return Object(b.b)(p.a,{meta:s},n)};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(b.b)(o,Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"typescript-\u7c7b\u578b\u64cd\u4f5c"},Object(b.b)("a",Object(a.a)({parentName:"h2"},{"aria-hidden":"true",tabIndex:-1,href:"#typescript-\u7c7b\u578b\u64cd\u4f5c"}),Object(b.b)("span",Object(a.a)({parentName:"a"},{className:"icon icon-link"}))),"Typescript \u7c7b\u578b\u64cd\u4f5c"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Partial (\u90e8\u5206, \u628a\u6240\u6709\u5b57\u6bb5\u8f6c\u4e3a\u53ef\u9009\u5b57\u6bb5)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Make all properties in T optional\n */\ntype Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n")),Object(b.b)("p",null,"example\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type partial = {\n  name: string;\n  getName(): string;\n};\n\n/**\n * TPartial \u7ed3\u679c\n * {\n *   name?: string\n *   getName()?: string\n * }\n */\ntype TPartial = Partial<partial>;\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Required (\u9700\u8981, \u628a\u6240\u6709\u5b57\u6bb5\u8f6c\u4e3a\u5fc5\u9009\u5b57\u6bb5)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Make all properties in T required\n */\ntype Required<T> = {\n  [P in keyof T]-?: T[P];\n};\n")),Object(b.b)("p",null,"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type required = {\n  name?: string;\n  getName(): string;\n};\n\n/**\n * TRequired \u7ed3\u679c\n * {\n *   name: string\n *   getName(): string\n * }\n */\ntype TRequired = Required<required>;\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Readonly (\u53ea\u8bfb\uff0c\u628a\u6240\u6709\u5b57\u6bb5\u8f6c\u4e3a\u53ea\u8bfb\u5b57\u6bb5)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Make all properties in T readonly\n */\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n")),Object(b.b)("p",null,"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type Treadonly = {\n  name?: string;\n  getName(): string;\n};\n\n/**\n * TReadonly \u7ed3\u679c\n * {\n *   readonly name?: string\n *   readonly getName(): string\n * }\n */\ntype TReadonly = Readonly<Treadonly>;\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Pick (\u6311\u9009, \u6311\u9009\u6307\u5b9a\u7684\u5b57\u6bb5)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * From T, pick a set of properties whose keys are in the union K\n */\ntype Pick<T, K extends keyof T> = {\n  [P in K]: T[P];\n};\n")),Object(b.b)("p",null,"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'type pick = {\n  name?: string;\n  age: number;\n  getName(): string;\n};\n\n/**\n * TPick \u7ed3\u679c\n * {\n *   name?: string\n *   age: number\n * }\n */\ntype TPick = Pick<pick, "name" | "age">;\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Record(\u8bb0\u5f55,\u5c06 K \u4e2d\u6240\u6709\u7684\u5c5e\u6027\u7684\u503c\u8f6c\u5316\u4e3a T \u7c7b\u578b)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Construct a type with a set of properties K of type T\n */\ntype Record<K extends keyof any, T> = {\n  [P in K]: T;\n};\n")),Object(b.b)("p",null,"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'type record = {\n  name?: string;\n  age: number;\n  getName(): string;\n};\n\n/**\n * TRecord \u7ed3\u679c\n * {\n *   name: string\n *   age: string\n *   getName: string\n * }\n */\ntype TRecord = Record<keyof record, string>;\n\n/**\n * Ta \u7ed3\u679c\n * {\n *   a: number\n *   b: number\n *   c: number\n *   1: number\n * }\n */\ntype Ta = Record<"a" | "b" | "c" | 1, number>;\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Exclude(\u6392\u9664,\u4ece T \u4e2d\u6392\u9664\u90a3\u4e9b\u53ef\u5206\u914d\u7ed9 U \u7684\u7c7b\u578b\uff0c)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Exclude from T those types that are assignable to U\n */\ntype Exclude<T, U> = T extends U ? never : T;\n")),Object(b.b)("p",null,"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type T = Exclude<1 | 2, 1 | 3>; // -> 2\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Extract(\u63d0\u53d6,\u4ece T \u4e2d\u63d0\u53d6\u53ef\u5206\u914d\u7ed9 U \u7684\u7c7b\u578b\uff0c \u4ea4\u96c6)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Extract from T those types that are assignable to U\n */\ntype Extract<T, U> = T extends U ? T : never;\n")),Object(b.b)("p",null,"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"type T = Extract<1 | 2, 1 | 3>; // -> 1\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Omit (\u5220\u53bb, \u6784\u9020\u4e00\u4e2a\u9664 K \u7c7b\u578b\u5916\u5177\u6709 T \u5c5e\u6027\u7684\u7c7b\u578b\u3002)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"/**\n * Construct a type with the properties of T except for those in type K.\n */\ntype Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;\n")),Object(b.b)("p",null,"example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'interface Person {\n  name: string;\n  age: number;\n  location: string;\n}\n\n/**\n * OmitPerson \u7ed3\u679c\n * {\n *   location: string\n * }\n */\ntype OmitPerson = Omit<Person, "name" | "age">;\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6570\u7ec4")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'/** arr1Example \u4e2d\u53ea\u53ef\u4ee5\u4f7f\u7528`string`\u7c7b\u578b\u586b\u5145 */\ntype arr1 = string[]; // \u5efa\u8bae\u4f7f\u7528[]\nconst arr1Example: arr1 = ["123", "23454"];\n\n/** arr2Example \u4e2d\u53ea\u53ef\u4ee5\u4f7f\u7528[`string`,`number`]\u7c7b\u578b\u586b\u5145\uff0c\u5fc5\u987b\u6309\u987a\u5e8f\u586b\u5145, \u4e2a\u6570\u4e5f\u6709\u9650\u5236 */\ntype arr2 = [string, number];\nconst arr2Example: arr2 = ["0", 1];\n\n/** arr3Example \u4e2d\u53ea\u53ef\u4ee5\u4f7f\u7528`string`\u6216`number`\u7c7b\u578b\u586b\u5145\uff0c\u6ca1\u6709\u987a\u5e8f\u8981\u6c42 */\ntype arr3 = (string | number)[];\nconst arr3Example: arr3 = [0, "1", "2", 3, 4];\n')),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5bf9\u8c61")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface Persion<T> {\n  [key: T]: T;\n}\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"extends")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"keyof (\u5bf9\u4e8e\u4efb\u4f55\u7c7b\u578b ",Object(b.b)("inlineCode",{parentName:"p"},"T"),"\uff0c ",Object(b.b)("inlineCode",{parentName:"p"},"keyof T"),"\u7684\u7ed3\u679c\u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},"T"),"\u4e0a\u5df2\u77e5\u7684\u516c\u5171\u5c5e\u6027\u540d\u7684\u8054\u5408)"))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface Person {\n  name: string;\n  age: number;\n}\n\ntype p = keyof Person; // -> p = 'name' | 'age'\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"typeof")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u4ea4\u53c9\u7c7b\u578b (\u4ea4\u53c9\u7c7b\u578b\u662f\u5c06\u591a\u4e2a\u7c7b\u578b\u5408\u5e76\u4e3a\u4e00\u4e2a\u7c7b\u578b)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"interface;\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8054\u5408\u7c7b\u578b (\u8054\u5408\u7c7b\u578b\u8868\u793a\u4e00\u4e2a\u503c\u53ef\u4ee5\u662f\u51e0\u79cd\u7c7b\u578b\u4e4b\u4e00,\u7528\u7ad6\u7ebf",Object(b.b)("inlineCode",{parentName:"li"},"\uff5c"),"\u5206\u9694\u6bcf\u4e2a\u7c7b\u578b)")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"function getNum(num: number | string): number {\n  return +num;\n}\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u7d22\u5f15\u7c7b\u578b")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u6620\u5c04\u7c7b\u578b")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"@4.1")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"  // @4.1\ntype Getters<T> = {\n  //\n  [K in keyof T as `get${capitalize K}`]: () => T[K]\n}\n\ninterface Person {\n    name: string;\n    age: number;\n    location: string;\n}\n\n/**\n* LazyPerson \u7ed3\u679c\n* {\n*   name: string\n*   age: number\n*   location: string\n*   getName: () => string\n*   getAge: () => number\n*   getLocation: () => string\n* }\n*/\ntype LazyPerson = Getters<Person>;\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"React \u4e2d\u7684\u7c7b\u578b\u7ea6\u675f"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"FC (\u51fd\u6570\u7ec4\u4ef6\u7c7b\u578b)")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"interface FunctionComponent<P = {}> {\n  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;\n  propTypes?: WeakValidationMap<P>;\n  contextTypes?: ValidationMap<any>;\n  defaultProps?: Partial<P>;\n  displayName?: string;\n}\n\ntype FC<P = {}> = FunctionComponent<P>;\n\n// \u5177\u4f53\u4f7f\u7528\ninterface IProps {}\nconst App: FC<IProps> = props => <div>{props.children}</div>;\n")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"useState"),Object(b.b)("p",{parentName:"li"},"React \u4e2d\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},"useState"),"\u65b9\u6cd5\u53bb\u8bbe\u7f6e state"))),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"function useState<S>(\n  initialState: S | (() => S)\n): [S, Dispatch<SetStateAction<S>>];\n"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},"Next.js \u4e2d\u7684\u7c7b\u578b\u7ea6\u675f"),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"NextPage (page \u7ec4\u4ef6\u7684\u7c7b\u578b)")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"/**\n * `Page` type, use it as a guide to create `pages`.\n */\nexport type NextPage<P = {}, IP = P> = NextComponentType<\n  NextPageContext,\n  IP,\n  P\n>;\n\n// \u5177\u4f53\u4f7f\u7528\ninterface IHomePageProps {}\nconst homePage: NextPage<IHomePageProps> = () => <div>this is home page</div>;\n")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"GetServerSideProps \uff08getServerSideProps \u51fd\u6570\u7684\u7c7b\u578b\uff09")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetServerSideProps<\n  P extends { [key: string]: any } = { [key: string]: any },\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = (\n  context: GetServerSidePropsContext<Q>\n) => Promise<GetServerSidePropsResult<P>>;\n")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"GetServerSidePropsContext \uff08getServerSideProps \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff09")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetServerSidePropsContext<\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = {\n  req: IncomingMessage; // http.IncomingMessage\n  res: ServerResponse; // http.ServerResponse\n  params?: Q; // \u53c2\u6570\n  query: ParsedUrlQuery; // \u8bf7\u6c42search\u53c2\u6570\n  preview?: boolean;\n  previewData?: any;\n  resolvedUrl: string;\n  locale?: string;\n  locales?: string[];\n  defaultLocale?: string;\n};\n")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"GetStaticProps \uff08getStaticProps \u51fd\u6570\u7684\u7c7b\u578b\uff09")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetStaticProps<\n  P extends { [key: string]: any } = { [key: string]: any },\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = (context: GetStaticPropsContext<Q>) => Promise<GetStaticPropsResult<P>>;\n")),Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"GetStaticPropsContext \uff08getStaticProps \u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\uff09")),Object(b.b)("pre",{parentName:"li"},Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export type GetStaticPropsContext<\n  Q extends ParsedUrlQuery = ParsedUrlQuery\n> = {\n  params?: Q;\n  preview?: boolean;\n  previewData?: any;\n  locale?: string;\n  locales?: string[];\n  defaultLocale?: string;\n};\n")))))}u.isMDXComponent=!0}},[["/rkc",0,1,2]]]);