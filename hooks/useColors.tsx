import { useTheme } from "@rneui/themed";

const useColors = () => {
  return useTheme().theme.colors;
};

export default useColors;
