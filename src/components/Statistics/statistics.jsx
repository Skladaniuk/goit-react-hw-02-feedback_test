import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total,onPositiveFeedback}) => {
  return (
    <div>
        
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{onPositiveFeedback}%</p>
    </div>
  );
};

Statistics.propTypes = {
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    onPositiveFeedback:PropTypes.number.isRequired,

}

export default Statistics;
