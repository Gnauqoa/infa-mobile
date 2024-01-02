import { CheckBox as CheckBoxElement, CheckBoxProps } from "@rneui/themed";
import { Text, View } from "react-native";

const CheckBox = ({ label, ...props }: CheckBoxProps & { label: string }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        // gap: 12,
        display: "flex",
        alignItems: "center",
      }}
    >
      <CheckBoxElement
        textStyle={{ padding: 0, margin: 0 }}
        containerStyle={{ padding: 0, margin: 0 }}
        {...props}
      >
        {null}
      </CheckBoxElement>
      <Text style={{ fontSize: 14, fontWeight: "600", color: "#212121" }}>
        {label}
      </Text>
    </View>
  );
};

export default CheckBox;
