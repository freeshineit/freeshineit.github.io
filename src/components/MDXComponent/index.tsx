import A from "./A/index";
import Blockquote from "./Blockquote/index";
import Code from "./Code";
import Delete from "./Delete/index";
import Em from "./Em/index";
import H1 from "./H1/index";
import H2 from "./H2/index";
import H3 from "./H3/index";
import H4 from "./H4/index";
import H5 from "./H5/index";
import H6 from "./H6/index";
import Hr from "./Hr";
import Img from "./Img";
// import InlineCode from "./InlineCode";
import Li from "./Li";
import Ol from "./Ol";
import P from "./P";
import Pre from "./Pre";
import Strong from "./Strong";
import Sup from "./Sup";
import Table from "./Table";
import Td from "./Td";
// import ThematicBreak from "./ThematicBreak";
import Tr from "./Tr";
import Ul from "./Ul";

const components = {
  a: A,
  blockquote: Blockquote,
  code: Code,
  del: Delete,
  em: Em,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  img: Img,
  // InlineCode,
  li: Li,
  ol: Ol,
  p: P,
  pre: Pre,
  strong: Strong,
  sup: Sup,
  table: Table,
  td: Td,
  // ThematicBreak,
  tr: Tr,
  ul: Ul
};

export default components;
