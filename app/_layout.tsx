import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider } from "@rneui/themed";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import theme from "../theme";
import ContextProvider from "../context";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <Stack initialRouteName="(auth)/login">
            <Stack.Screen
              name="(auth)/login"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen
              name="(product)/[productId]"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(product)/news"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(product)/add"
              options={{ headerShown: false }}
            />
          </Stack>
        </ThemeProvider>
      </ContextProvider>
    </SafeAreaProvider>
  );
}
