import PropTypes from "prop-types";

const ServiceCardPropTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};

export default ServiceCardPropTypes;
