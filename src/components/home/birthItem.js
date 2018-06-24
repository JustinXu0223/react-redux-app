/**
 * @component birthItem.jsm.js
 * @description 首页条目
 * @time 2018/6/24
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text, Image, Platform } from 'react-native';
import { theme } from '../../constants';
import BoxShadow from '../common/boxShadow';

const ItemView = styled(View)`
  background: #FFFFFF;
  border-radius: 4px;
  width: 110px;
  align-self: center;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 14px;
`;

const ImageView = styled(Image)`
  width: 60px;
  height: 60px;
`;

const NameText = styled(Text)`
  font-family: ${theme.fontMedium};
  font-size: 16px;
  color: #515151;
  letter-spacing: -0.5px;
  padding-top: 7px;
`;

const TitleText = styled(Text)`
  font-family: ${theme.fontRegular};
  font-size: 13px;
  color: #ADADAD;
  letter-spacing: -0.43px;
  padding-top: 2px;
`;

class birthItem extends React.PureComponent {
  render() {
    // x: 14,
    //       y: -2,
    const { item } = this.props;
    const ios = Platform.OS === 'ios';
    const boxConfig = {
      width: 110,
      height: 132,
      color: '#b9b9b9',
      border: 2,
      radius: 4,
      opacity: 0.5,
      x: ios ? 8 : 14,
      y: ios ? 0 : -1,
      style: { width: '100%', marginVertical: 5 },
    }
    return (
      <BoxShadow
        setting={boxConfig}
      >
        <ItemView>
          <ImageView
            source={item.thumbnail}
          />
          <NameText>{item.name}</NameText>
          <TitleText>{item.docSummary}</TitleText>
        </ItemView>
      </BoxShadow>
    );
  }
}

birthItem.defaultProps = {
  item: {},
};

birthItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
};

export default birthItem;
