'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';

interface CodeProps {
  children: string;
  className?: string;
}

function CodeBlock({ children, className }: CodeProps) {
  const { theme } = useTheme();
  const language = className?.replace('language-', '') || 'text';
  
  return (
    <SyntaxHighlighter
      language={language}
      style={theme === 'dark' ? oneDark : oneLight}
      customStyle={{
        fontSize: '1spx',
        lineHeight: '1.5',
        borderRadius: '8px',
        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", monaco, inconsolata, "roboto mono", "noto sans mono", "ubuntu mono", monospace',
        border: 'none',
        boxShadow: 'none',
        margin: 0,
        padding: '1rem',
      }}
      showLineNumbers
      wrapLines
    >
      {children.trim()}
    </SyntaxHighlighter>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono surface-backdrop px-1.5 py-0.5 rounded border">
      {children}
    </code>
  );
}

interface MDXComponentProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

interface CodeComponentProps {
  children: string;
  className?: string;
  [key: string]: unknown;
}

export const MDXComponents = {
  // Remove the first H1 from MDX content to avoid duplication
  h1: () => {
    // Skip rendering the first H1 since we show it in the page template
    return null;
  },
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="heading-4-responsive font-heading lg:mt-12 mt-6 lg:mb-4 mb-2 content-strong" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="heading-5-responsive font-heading lg:mt-8 mt-6 lg:mb-4 mb-2 content-strong" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: MDXComponentProps) => (
    <h4 className="heading-6-responsive font-heading lg:mt-8 mt-6 lg:mb-4 mb-2 content-strong" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: MDXComponentProps) => (
    <h5 className="body-lg font-heading lg:mt-6 mt-4 lg:mb-4 mb-2 content-strong" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: MDXComponentProps) => (
    <h6 className="body-lg font-heading lg:mt-6 mt-4 lg:mb-4 mb-2 content-strong" {...props}>
      {children}
    </h6>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="body-lg lg:mb-6 mb-4 content-default" {...props}>
      {children}
    </p>
  ),
  code: ({ children, className, ...props }: CodeComponentProps) => {
    // Check if this is inline code (no className means inline)
    if (!className) {
      return <InlineCode {...props}>{children}</InlineCode>;
    }
    
    // This is a code block with language specification
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
  pre: ({ children, ...props }: MDXComponentProps) => {
    // Extract the code element from pre
    if (React.isValidElement(children) && children.type === 'code') {
      const codeProps = children.props as { className?: string; children: string };
      return (
        <div className="my-6">
          <CodeBlock className={codeProps.className}>
            {codeProps.children}
          </CodeBlock>
        </div>
      );
    }
    
    // Fallback for other pre content
    return (
      <div className="my-6">
        <div className="font-mono rounded overflow-x-auto bg-transparent p-0 m-0" {...props}>
          {children}
        </div>
      </div>
    );
  },
};