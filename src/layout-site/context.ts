import React from 'react';

export const LayoutContext = React.createContext<{
  fixedHeader: boolean;
  float: boolean;
  contentWidth?: 'fixed' | 'fluid' | { header?: 'fixed'; content?: 'fixed' } | boolean;
}>({ fixedHeader: false, float: false, contentWidth: false });

export const LayoutSiderContext = React.createContext<{ status?: string }>({});
