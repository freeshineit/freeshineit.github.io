import Highlight, { defaultProps, Language } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/github";
// import "prismjs/themes/prism-okaidia.css";

interface ICode {
  children?: any;
  className: string;
}

function Code({ children, className }: ICode) {
  const language = className
    ? (className.replace(/language-/, "") as Language)
    : ("" as Language);
  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      // theme={theme}
      language={language}
    >
      {({
        className,
        // style,
        tokens,
        getLineProps,
        getTokenProps
      }) => (
        <pre
          className={`${className} pre-tag`}
          style={{
            // ...style,
            overflow: "scroll",
            marginTop: 20,
            marginBottom: 20,
            padding: 16
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })} style={{}}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} style={{}} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default Code;
