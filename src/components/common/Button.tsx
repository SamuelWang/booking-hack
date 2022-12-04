import { PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
  as?: 'submit' | 'reset' | 'button' | undefined;
  onClick?: () => void;
  outline?: boolean;
}>;

export function Button(props: ButtonProps) {
  const { as = 'button', children, onClick, outline = false } = props;
  let colorStyles = '';

  if (outline) {
    colorStyles =
      'border border-solid border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all';
  } else {
    colorStyles = 'bg-blue-500 text-white hover:bg-blue-400 transition-all';
  }

  return (
    <button
      className={`px-3 py-2 rounded-md ${colorStyles}`}
      type={as}
      onClick={onClick}>
      {children}
    </button>
  );
}
