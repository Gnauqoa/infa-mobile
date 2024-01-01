import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";
import useColors from "../../hooks/useColors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

const AuthLayout = () => {
  const colors = useColors();
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity>
            <MaterialIcons
              style={{ marginLeft: 15 }}
              name="screen-rotation"
              size={25}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <Link href="/History" asChild>
            <Pressable>
              {({ pressed }) => (
                <MaterialIcons
                  name="history"
                  size={25}
                  color={colors.white}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
        tabBarActiveTintColor: "#f09a36",
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Converter",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name="code" color={focused ? "#f09a36" : color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="login"
        options={{
          title: "Calculator",
          tabBarIcon: ({ color, focused }) => (
            <Entypo
              size={20}
              name="calculator"
              color={focused ? "#f09a36" : color}
            />
          ),
          tabBarActiveTintColor: "#f09a36",
        }}
      />
    </Tabs>
  );
};

export default AuthLayout;
