import type { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => (
  <p className="text-lg leading-relaxed text-gray-700">{children}</p>
);
