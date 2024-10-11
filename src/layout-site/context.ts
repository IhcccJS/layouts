import React from 'react';

export const LayoutContext = React.createContext<{
  fixedHeader: boolean;
  float: boolean;
  contentWidth: { header?: 'fixed'; content?: 'fixed' } | 'fixed' | 'fluid';
}>({ fixedHeader: false, float: false, contentWidth: 'fluid' });

export const LayoutSiderContext = React.createContext<{ status?: string }>({});
