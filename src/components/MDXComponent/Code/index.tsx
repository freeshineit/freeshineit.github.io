import React, { useRef, useCallback, useMemo, useState } from "react";
import cls from "classnames";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/github";
// import "prismjs/themes/prism-okaidia.css";
import ReactClipboardjs from "react-clipboardjs-copy";

import styles from "./Code.module.scss";

interface ICode {
  children?: any;
  className: string;
}

function Code({ children, className }: ICode) {
  const language = useMemo(
    () =>
      className
        ? (className.replace(/language-/, "") as Language)
        : ("" as Language),
    []
  );

  const [copied, setCopied] = useState(false);

  const codeRef = useRef<HTMLDivElement>();

  const handleCopySuccess = useCallback(e => {
    setCopied(true);
  }, []);

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      // theme={theme}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${styles.pre} pre-tag ${className} `}
          style={{
            ...style,
            overflow: "scroll",
            marginTop: 20,
            marginBottom: 20,
            padding: 16
          }}
        >
          {language ? (
            <span className={styles.language}>{language}</span>
          ) : null}
          <ReactClipboardjs
            target={() => codeRef.current as Element}
            onSuccess={handleCopySuccess}
          >
            <span
              className={cls(styles.languageCopy, {
                [styles.languageCopied]: copied
              })}
            >
              <svg
                viewBox="0 0 1024 1024"
                version="1.1"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path d="M768 682.666667V170.666667a85.333333 85.333333 0 0 0-85.333333-85.333334H170.666667a85.333333 85.333333 0 0 0-85.333334 85.333334v512a85.333333 85.333333 0 0 0 85.333334 85.333333h512a85.333333 85.333333 0 0 0 85.333333-85.333333zM170.666667 170.666667h512v512H170.666667z m682.666666 85.333333v512a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 0 85.333333 85.333334h426.666667a170.666667 170.666667 0 0 0 170.666667-170.666667V341.333333a85.333333 85.333333 0 0 0-85.333334-85.333333z" />
              </svg>
            </span>
          </ReactClipboardjs>
          <div ref={codeRef}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })} style={{}}>
                {line.map((token, key) => (
                  <span
                    key={key}
                    {...getTokenProps({ token, key })}
                    style={{ display: "inline-block" }}
                  />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
}

export default Code;
