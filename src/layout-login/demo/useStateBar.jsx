import React from 'react';

const alignOptions = ['left', 'center', 'right'];

function useStateBar() {
  const [float, setFloat] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [blocked, setBlocked] = React.useState(false);
  const [bordered, setBordered] = React.useState(false);
  const [centered, setCentered] = React.useState(false);
  const [align, setAlign] = React.useState(1);

  const view = (
    <div style={{ position: 'absolute', bottom: 32, right: 32, zIndex: 90 }}>
      <button onClick={() => setFloat(!float)}>float</button>
      <button onClick={() => setBlur(!blur)}>blur</button>
      <button onClick={() => setBlocked(!blocked)}>blocked</button>
      <button onClick={() => setBordered(!bordered)}>bordered</button>
      <button onClick={() => setCentered(!centered)}>centered</button>
      <button onClick={() => setAlign(align + 1 > 2 ? 0 : align + 1)}>align</button>
    </div>
  );

  return {
    view,
    float,
    blur,
    blocked,
    bordered,
    centered,
    align: alignOptions[align],
  };
}

export default useStateBar;
