import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';

const meta: Meta = {
  title: 'Icons',
  parameters: {
    layout: 'fullscreen',
    actions: { disable: true },
    controls: { disable: true }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

const PACKAGE_NAME = '@nikaat-crop/es-icons';

const INSTALL_COMMAND = `npm install ${PACKAGE_NAME}`;

const USAGE_EXAMPLE = `import { HomeFill, UserFill } from '${PACKAGE_NAME}';

function App() {
  return (
    <>
      <HomeFill style={{ width: 24, height: 24 }} />
      <UserFill className="w-6 h-6" />
    </>
  );
}`;

const TREE_SHAKING_EXAMPLE = `// Import only what you need
import { HomeFill, UserFill } from '${PACKAGE_NAME}';`;

const CodeBlock = ({
  label,
  code,
  copied,
  onCopy
}: {
  label: string;
  code: string;
  copied: boolean;
  onCopy: () => void;
}) => (
  <div style={{ marginBottom: '16px' }}>
    <div
      style={{
        fontSize: '0.7rem',
        fontWeight: 500,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#a0a0a0',
        marginBottom: '8px'
      }}
    >
      {label}
    </div>
    <div
      style={{
        position: 'relative',
        background: '#111111',
        border: '1px solid #2a2a2a',
        borderRadius: '8px',
        padding: '14px 16px',
        paddingRight: '72px'
      }}
    >
      <pre
        style={{
          margin: 0,
          fontSize: '0.8rem',
          lineHeight: 1.6,
          color: '#ffffff',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}
      >
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={onCopy}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '4px 10px',
          fontSize: '0.7rem',
          fontWeight: 500,
          border: `1px solid ${copied ? '#ffffff' : '#2a2a2a'}`,
          borderRadius: '6px',
          background: copied ? '#ffffff' : '#1a1a1a',
          color: copied ? '#000000' : '#a0a0a0',
          cursor: 'pointer'
        }}
      >
        {copied ? 'copied' : 'copy'}
      </button>
    </div>
  </div>
);

const InstallationGuide = () => {
  const [copiedSnippet, setCopiedSnippet] = useState<'install' | 'usage' | 'tree-shaking' | null>(null);

  const copySnippet = async (snippet: 'install' | 'usage' | 'tree-shaking', text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSnippet(snippet);
      setTimeout(() => setCopiedSnippet(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#000000',
        padding: '48px 32px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: '#ffffff'
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div
          style={{
            paddingBottom: '24px',
            borderBottom: '1px solid #2a2a2a',
            marginBottom: '48px'
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#ffffff'
            }}
          >
            ES Icons
          </span>
        </div>

        <h1
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#ffffff',
            margin: '0 0 12px 0'
          }}
        >
          Installation
        </h1>
        <p
          style={{
            fontSize: '0.875rem',
            color: '#a0a0a0',
            margin: '0 0 32px 0',
            lineHeight: 1.6
          }}
        >
          Install the package and import icons as React components in your project.
        </p>

        <CodeBlock
          label="Install"
          code={INSTALL_COMMAND}
          copied={copiedSnippet === 'install'}
          onCopy={() => copySnippet('install', INSTALL_COMMAND)}
        />
        <CodeBlock
          label="Usage"
          code={USAGE_EXAMPLE}
          copied={copiedSnippet === 'usage'}
          onCopy={() => copySnippet('usage', USAGE_EXAMPLE)}
        />
        <CodeBlock
          label="Tree shaking"
          code={TREE_SHAKING_EXAMPLE}
          copied={copiedSnippet === 'tree-shaking'}
          onCopy={() => copySnippet('tree-shaking', TREE_SHAKING_EXAMPLE)}
        />

        <div
          style={{
            marginTop: '48px',
            paddingTop: '32px',
            borderTop: '1px solid #2a2a2a'
          }}
        >
          <h2
            style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#a0a0a0',
              margin: '0 0 16px 0'
            }}
          >
            Requirements
          </h2>
          <p style={{ fontSize: '0.875rem', color: '#a0a0a0', margin: 0, lineHeight: 1.6 }}>
            React {`>=`} 16.8.0 and react-dom {`>=`} 16.8.0
          </p>
        </div>
      </div>
    </div>
  );
};

export const Installation: Story = {
  render: () => <InstallationGuide />
};
