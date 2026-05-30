import { type SVGProps } from 'react';

interface IcProps extends SVGProps<SVGSVGElement> {
  d?: string;
  size?: number;
  sw?: number;
}

function Ic({ d, size = 22, sw = 1.6, fill = 'none', children, ...props }: IcProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children ?? (d ? <path d={d} /> : null)}
    </svg>
  );
}

export function IconGithub(props: IcProps) {
  return (
    <Ic {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </Ic>
  );
}

export function IconLinkedin(props: IcProps) {
  return (
    <Ic {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Ic>
  );
}

export function IconMail(props: IcProps) {
  return (
    <Ic {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </Ic>
  );
}

export function IconPin(props: IcProps) {
  return (
    <Ic {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Ic>
  );
}

export function IconArrowUR(props: IcProps) {
  return (
    <Ic {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </Ic>
  );
}

export function IconArrowDown(props: IcProps) {
  return (
    <Ic {...props}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </Ic>
  );
}

export function IconTerminal(props: IcProps) {
  return (
    <Ic {...props}>
      <path d="m4 17 6-6-6-6" />
      <path d="M12 19h8" />
    </Ic>
  );
}

export function IconSpark(props: IcProps) {
  return (
    <Ic
      {...props}
      d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
    />
  );
}
