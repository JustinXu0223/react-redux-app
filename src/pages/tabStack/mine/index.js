/**
 * @component index.js
 * @description 我的
 * @time 2018/6/23
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import { routers, theme } from '../../../constants/index';
import MineScreen from './mine';
import MinePerformanceScreen from './performance'
import MineCardScreen from './card'
import MineIncomeScreen from './income'
import MineQrCodeScreen from './qrCode'
import MineReportScreen from './report'

const RouteConfig = {
  [routers.mine]: MineScreen,
  [routers.minePerformance]: MinePerformanceScreen,
  [routers.mineCard]: MineCardScreen,
  [routers.mineIncome]: MineIncomeScreen,
  [routers.mineQrCode]: MineQrCodeScreen,
  [routers.mineReport]: MineReportScreen
};

const navigatorConfig = {
  initialRouteName: routers.minePerformance,
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'screen',
};

const MineStack = createStackNavigator(RouteConfig, navigatorConfig);

const tabBarIcon = ({ focused }) => (
  focused ? (
    <Image
      source={require('../../../assets/tabBar/mine-focus.png')}
      size={24}
    />
  ) : (
    <Image
      source={require('../../../assets/tabBar/mine.png')}
      size={24}
    />
  )
);

tabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

MineStack.navigationOptions = ({ navigation }) => {
  const { index } = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel: '我的',
    tabBarIcon,
    tabBarOptions: {
      activeTintColor: theme.primaryColor, // 文字和图片选中颜色
      inactiveTintColor: theme.inactiveColor, // 文字和图片默认颜色
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },
  };
};

export default MineStack;
