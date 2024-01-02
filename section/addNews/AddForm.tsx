import { useState } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "../../atomic";
import { useRouter } from "expo-router";

const AddForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const { replace } = useRouter();
  return (
    <View style={{ paddingTop: 32 }}>
      <Text style={{ fontSize: 20, fontWeight: "700" }}>Tên tin mua</Text>
      <Input
        containerProps={{ style: { marginTop: 8 } }}
        inputProps={{
          style: { color: "#424242", fontSize: 20, fontWeight: "400" },
          placeholder: "Cái tên nói lên tất cả sẽ giúp ích rất nhiều đấy",
        }}
      />
      <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 32 }}>
        Mô tả
      </Text>

      <Input
        containerProps={{ style: { marginTop: 8 } }}
        inputProps={{
          placeholder:
            "Một đoạn văn miêu tả đầy đủ sẽ giúp sản phẩm của bạ bán dễ hơn.",
          style: { color: "#424242", fontSize: 20, fontWeight: "400" },
        }}
      />
      <Button onPress={() => replace("/(product)/news")}>Đăng tin</Button>
    </View>
  );
};

export default AddForm;
