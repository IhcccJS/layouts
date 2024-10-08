import './index.css';

function Icon({ type }) {
  return (
    <svg className="icon" aria-hidden="true">
      <use xlinkHref={`#${type}`}></use>
    </svg>
  );
}

export default Icon;
