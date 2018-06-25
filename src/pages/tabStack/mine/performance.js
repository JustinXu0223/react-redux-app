/**
 * @component performance.js
 * @description 我的业绩
 * @time 2018/6/25
 * @author zhao
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

import { BasicPage } from '../../../components/layout';
import { theme } from '../../../constants';

class PerformanceView extends Component {
  state = {};

  render() {
    return (
      <BasicPage>
      </BasicPage>
    );
  }
}

PerformanceView.navigationOptions = () => ({
  title: '我的业绩',
  headerStyle: theme.headerStyle,
  headerBackTitle: null,
  headerTintColor: theme.mainTextColor,
  headerTitleStyle: theme.headerTitleStyle,
});

PerformanceView.propTypes = {
};

export default PerformanceView;