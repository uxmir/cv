import React from "react";
import PropTypes from "prop-types";
const Heading = ({ heading, icon: Icon, subHeading, childHeading }) => {
  return (
    <>
      <div className="flex flex-col gap-y-3 justify-center items-center">
        {childHeading && (
          <div className="px-6 py-1 text-md font-medium flex items-center gap-x-1 rounded-3xl bg-purple-300 text-purple-600">
            <Icon className="text-purple-600" />
            <span className="capitalize">{subHeading}</span>
          </div>
        )}
        <h3 className=" text-3xl sm:text-4xl font-bold gradient-text capitalize text-center">
          {heading}
        </h3>
      </div>
    </>
  );
};

Heading.propTypes = {
  childHeading: PropTypes.bool,
};
Heading.defaultProps = {
  childHeading: false,
};
export default Heading;
