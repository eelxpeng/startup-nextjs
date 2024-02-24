// components/CodeSnippet.js

import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

SyntaxHighlighter.registerLanguage('javascript', javascript);

const CodeSnippet = ({ language, code }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
