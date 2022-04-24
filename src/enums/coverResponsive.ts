const coverResponsive = {
  base: 'base',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
} as const;
export type coverResponsive =
  typeof coverResponsive[keyof typeof coverResponsive];
