import { Tabs } from "expo-router";

const AuthLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f09a36",
        headerShown: false, // Add this line to hide the header
        tabBarStyle: {
          display: "none",
        },
      }}
      initialRouteName="login" // Set the default screen to "login"
    >
      <Tabs.Screen name="login" />
    </Tabs>
  );
};

export default AuthLayout;
