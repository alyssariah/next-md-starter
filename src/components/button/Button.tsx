import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  size?: string;
  label?: string;
  shape?: string;
  disabled?: boolean;
  startIcon?: any;
  endIcon?: any;
  boxShadow?: string;
  configuration?: string;
  onClick?: any;
  stretch?: boolean;
}

export const Button = ({
  size = 'medium',
  label = 'Button text',
  shape = 'square',
  disabled,
  startIcon,
  endIcon,
  boxShadow = '4',
  configuration = 'filled',
  onClick,
  stretch,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center items-center cursor-pointer font-[500] px-[24px] tracking-[0.5px]',
        {
          ['cursor-not-allowed pointer-events-none']: disabled,
          [`shadow-${boxShadow}`]: configuration === 'filled',
          ['w-[100%]']: stretch,
          ['rounded-[5px]']: shape == 'square',
          ['rounded-[50px]']: shape == 'round',
          ['text-[12px] leading-[16px] h-[30px]']: size === 'small',
          ['text-[14px] leading-[16px] h-[36px]']: size === 'medium',
          ['text-[16px] leading-[20px] h-[40px]']: size === 'large',
          ['bg-blue-500 text-white-500 outline-0 border-none hover:opacity-80']:
            configuration === 'filled',
          ['border-blue-500 border-[1px] border-solid text-blue-500 bg-transparent hover:opacity-80']:
            configuration === 'outline',
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {label}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};
