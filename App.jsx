import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/Home';
import AboutScreen from './pages/About';
import ListScreen from './pages/Listan';
import DetailScreen from './pages/DetailScreen';
import { getTabBarIcon } from './components/tabBarStyle';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Listan" component={ListScreen} options={{ title: "Listan" }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detalj" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: getTabBarIcon(route),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Hem" }} />
        <Tab.Screen name="About" component={AboutScreen} options={{ title: "Om" }} />
        <Tab.Screen name="ListStack" component={ListStack} options={{ title: "Listan", headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});