import A from "./A";
import Blockquote from "./Blockquote";
import Code from "./Code";
import Delete from "./Delete";
import Em from "./Em";
import H1 from "./Heading/H1";
import H2 from "./Heading/H2";
import H3 from "./Heading/H3";
import H4 from "./Heading/H4";
import H5 from "./Heading/H5";
import H6 from "./Heading/H6";
import Hr from "./Hr";
import Img from "./Img";
// import InlineCode from "./InlineCode";
import Li from "./List/Li";
import Ol from "./List/Ol";
import P from "./P";
import Pre from "./Pre";
import Strong from "./Strong";
import Sup from "./Sup/";
import Table from "./Table/Table";
import Th from "./Table/Th";
import Td from "./Table/Td";
// import ThematicBreak from "./ThematicBreak";
import Tr from "./Table/Tr";
import Ul from "./List/Ul";

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
  th: Th,
  td: Td,
  // ThematicBreak,
  tr: Tr,
  ul: Ul
};

export default components;
