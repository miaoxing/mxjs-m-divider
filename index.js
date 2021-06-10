import {View} from '@fower/taro';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import './index.scss';

const Divider = ({className, children, ...props}) => {
  return (
    <View className={clsx('mx-divider', className)} {...props}>{children}</View>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Divider;
