import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import TabButton from "./components/TabButton";
import ShopScreen from "./screens/ShopsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "pink",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarButton: (props) => <TabButton {...props} name="cash" />,
          }}
        />
        <Tab.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            headerShown: false,
            tabBarButton: (props) => <TabButton {...props} name="home" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
