import { motion } from 'framer-motion';

const MainCard = ({ position, el }) => {
  const fromLeft = {
    offscreen: {
      x: 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1,
      },
    },
  };

  const fromRight = {
    offscreen: {
      x: -400,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  // console.log(position);
  return (
    <>
      {position === 'left' ? (
        <motion.article initial="offscreen" whileInView="onscreen">
          <motion.div className="step-box" variants={fromLeft}>
            <div className="step-box_text">
              <div className="step">{el.step}</div>
              <div className="sub-title">{el.subTitle}</div>
              <span>{el.description}</span>
            </div>
            <div className="step-box_img">
              <div className="img-card"></div>
            </div>
          </motion.div>
        </motion.article>
      ) : (
        <motion.article initial="offscreen" whileInView="onscreen">
          <motion.div className="step-box" variants={fromRight}>
            <div className="step-box_img">
              <div className="img-card"></div>
            </div>
            <div className="step-box_text">
              <div className="step">{el.step}</div>
              <div className="sub-title">{el.subTitle}</div>
              <span>{el.description}</span>
            </div>
          </motion.div>
        </motion.article>
      )}
    </>
  );
};

export default MainCard;
