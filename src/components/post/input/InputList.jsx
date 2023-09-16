import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
const InputList = forwardRef(({ value, onChange, onKeyUp }, ref) => {
  return (
    <li>
      <span>&bull;</span>
      <input value={value} onChange={onChange} onKeyUp={onKeyUp} rows={1} ref={ref} />
    </li>
  );
});

export default InputList;
