import { Text } from "@rneui/base";
import { View } from "react-native";
import { CheckBox, Input } from "../../atomic";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { InputType } from "../../atomic/Input";
import { useState } from "react";

type FormValue = {
  account: string;
  password: string;
  remember: boolean;
};

const LoginForm = () => {
  const [form, setForm] = useState<FormValue>({
    account: "",
    password: "",
    remember: false,
  });
  return (
    <View
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        gap: 20,
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 32, fontWeight: "700", color: "#212121" }}>
        Đăng nhập
      </Text>
      <Input
        startIcon={<Ionicons name="person" size={20} color="#9E9E9E" />}
        inputProps={{
          value: form.account,
          onChangeText: (value) =>
            setForm((prev) => ({ ...prev, account: value })),
          placeholder: "Tên đăng nhập/ số điện thoại",
        }}
      />
      <Input
        inputProps={{
          placeholder: "Mật khẩu",
          value: form.password,
          onChangeText: (value) =>
            setForm((prev) => ({ ...prev, password: value })),
        }}
        type={InputType.password}
        startIcon={<AntDesign name="lock" size={20} color="#9E9E9E" />}
      />
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <CheckBox
          label="Ghi nhớ tôi"
          checked={form.remember}
          onPress={() =>
            setForm((prev) => ({ ...prev, remember: !prev.remember }))
          }
        />
      </View>
    </View>
  );
};

export default LoginForm;
