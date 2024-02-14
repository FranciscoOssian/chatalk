import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from '@src/styles/theme';

const SvgComponent = (props) => (
  <Svg width="35" height="35" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.6225 0C15.2671 0 15.888 0.241512 16.3617 0.676443L18.0133 2.19312C18.4278 2.57369 18.955 2.80617 19.5122 2.85834L19.7525 2.86957H20.5128C22.991 2.86957 25 4.86806 25 7.33333V17.5362C25 20.0015 22.991 22 20.5128 22H4.48718C2.00898 22 0 20.0015 0 17.5362V7.33333C0 4.86806 2.00898 2.86957 4.48718 2.86957H5.24748C5.89207 2.86957 6.51301 2.62805 6.98666 2.19312L8.63834 0.676443C9.11199 0.241512 9.73293 0 10.3775 0H14.6225ZM12.5 5.5C8.91015 5.5 6 8.41015 6 12C6 15.5899 8.91015 18.5 12.5 18.5C16.0899 18.5 19 15.5899 19 12C19 8.41015 16.0899 5.5 12.5 5.5ZM12.5 7.5C14.9853 7.5 17 9.51472 17 12C17 14.4853 14.9853 16.5 12.5 16.5C10.0147 16.5 8 14.4853 8 12C8 9.51472 10.0147 7.5 12.5 7.5Z"
      fill={theme.colors.border}
    />
  </Svg>
);

export default SvgComponent;
