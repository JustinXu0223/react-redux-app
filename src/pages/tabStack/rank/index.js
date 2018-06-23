/**
 * @component index.js
 * @description 我的
 * @time 2018/6/17
 * @author JUSTIN XU
 */
import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import { routers, theme } from '../../../constants/index';
import MineScreen from './rank';

const RouteConfig = {
  [routers.mine]: MineScreen,
};

const navigatorConfig = {
  initialRouteName: routers.mine,
  cardStyle: { shadowColor: 'transparent' },
  headerMode: 'screen',
};

const MineStack = createStackNavigator(RouteConfig, navigatorConfig);

const tabBarIcon = ({ focused }) => (
  <Icon
    name="pulse"
    size={24}
    style={{
      color: focused ? theme.primaryColor : theme.inactiveColor,
    }}
  />
);

tabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
};

MineStack.navigationOptions = ({ navigation }) => {
  const { index } = navigation.state;
  return {
    tabBarVisible: index === 0,
    tabBarLabel: '排行',
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