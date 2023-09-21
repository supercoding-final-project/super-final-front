const TotalPrice = ({ total, totalLength }) => {
  return (
    <div className="price-container">
      <span>결제 금액</span>
      <span>
        총 {totalLength}시간 = {total}P
      </span>
    </div>
  );
};

export default TotalPrice;
