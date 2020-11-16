import Highlight, {
  defaultProps,
  Language,
  PrismTheme
} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
// import theme from "./theme";

interface ICode {
  children?: any;
  className: string;
}

function Code({ children, className }: ICode) {
  const language = className.replace(/language-/, "") as Language;
  return (
    <Highlight
      {...defaultProps}
      theme={theme as PrismTheme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} pre-tag`}
          style={{
            ...style,
            overflow: "scroll",
            marginTop: 20,
            marginBottom: 20,
            padding: 16
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default Code;
