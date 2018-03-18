import React from 'react';
import PropTypes from 'prop-types';

class Example extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const { exampleProps } = this.props;
    return (
      <div>
        {`this is an exmaple
        my test props is : ${exampleProps}`}
      </div>
    );
  }
}

Example.propTypes = {
  exampleProps: PropTypes.string
};

Example.defaultProps = {
  exampleProps: `no props passed`
};

export default Example;
