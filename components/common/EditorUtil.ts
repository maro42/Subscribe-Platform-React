import dynamic from 'next/dynamic';

export const Editor = dynamic(
  (): any => {
    return import('react-draft-wysiwyg').then((mod) => mod.Editor);
  },
  { ssr: false },
);
