import Ionicons from 'react-native-vector-icons/Ionicons';

export const getTabBarIcon = (route) => ({ focused, color, size }) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'About') {
    iconName = focused ? 'information-circle' : 'information-circle-outline';
  } else if (route.name === 'ListStack') {
    iconName = focused ? 'list' : 'list-outline';
  }

  return <Ionicons name={iconName} size={size} color={color} />;
};