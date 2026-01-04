import React from 'react';

const siderStatusList = ['close', 'collapse', 'open', 'expand', 'half', 'full', 'free'];

const primaryStyle = (state) => {
  if (state) return { background: 'var(--color-primary)', border: '1px solid var(--color-primary)' };
};

function useControl() {
  const [autoClose, setAutoClose] = React.useState(false);
  const [siderStatus, setSiderStatus] = React.useState(2);
  const [float, setFloat] = React.useState(false);
  const [blur, setBlur] = React.useState(false);
  const [fixedHeader, setFixedHeader] = React.useState(true);
  const [contentWidth, setContentWidth] = React.useState('fluid');

  const siderState = React.useMemo(() => {
    let index = siderStatus;
    index = index <= 0 ? siderStatusList.length : index;
    index = index >= siderStatusList.length ? 0 : index;
    return { index, status: siderStatusList[index] };
  }, [siderStatus]);

  const controlView = (
    <div style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 999, display: 'flex', gap: 8 }}>
      <button style={primaryStyle(autoClose)} onClick={() => setAutoClose(!autoClose)}>
        autoClose
      </button>
      <button onClick={() => setSiderStatus(siderState.index + 1)}>{siderState.status}</button>
      <button style={primaryStyle(float)} onClick={() => setFloat(!float)}>
        float
      </button>
      <button style={primaryStyle(blur)} onClick={() => setBlur(!blur)}>
        blur
      </button>
      <button style={primaryStyle(fixedHeader)} onClick={() => setFixedHeader(!fixedHeader)}>
        fixedHeader
      </button>
      <button onClick={() => setContentWidth(contentWidth === 'fixed' ? 'fluid' : 'fixed')}>
        contentWidth: {contentWidth}
      </button>
    </div>
  );

  return {
    controlView,
    autoClose,
    siderState,
    float,
    blur,
    fixedHeader,
    contentWidth,
  };
}

export default useControl;
