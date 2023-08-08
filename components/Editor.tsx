import React, { useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';

// interface EditorProps {
//   onChange: (blocks: OutputData['blocks']) => void;
//   initialBlocks?: OutputData['blocks'];
// }

export const Editor: React.FC = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      placeholder: 'Введите текст вашей статьи . . . ',
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error('ERROR editor cleanup', e));
    };
  }, []);

  return <div id="editorjs" />;
};
