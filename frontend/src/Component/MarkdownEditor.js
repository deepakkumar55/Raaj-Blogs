import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const MarkdownEditor = ({ value, onChange }) => {
  const mdParser = new MarkdownIt();

  const handleEditorChange = ({ text }) => {
    onChange(text);
  };

  return (
    <div>
      <MdEditor
        value={value}
        style={{ height: '400px' }} // Adjust height as needed
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default MarkdownEditor;
