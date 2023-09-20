import Schedule from './Schedule';

const MetaBox = () => {
  return (
    <ul className="info-container">
      <li>
        <span className="label">POST명</span>
        <span className="info">[프론트/백엔드]이력서 및 포트폴리오 전략 상담</span>
      </li>
      <li>
        <span className="label">멘토</span>
        <span className="info">Lucy</span>
      </li>
      <li>
        <span className="label">멘티</span>
        <span className="info">김소미</span>
      </li>
      <li>
        <span className="label">일정</span>
        <Schedule />
      </li>
    </ul>
  );
};

export default MetaBox;
