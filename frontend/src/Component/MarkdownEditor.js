import React from 'react';
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";

const MarkdownEditor = ({ value, onChange }) => {
  return (
    <SimpleMDE value={value} onChange={onChange} />
  );
};

export default MarkdownEditor;
