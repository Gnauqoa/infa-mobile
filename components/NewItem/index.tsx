import { FontAwesome } from "@expo/vector-icons";
import { Image, ImageSourcePropType, Text, View } from "react-native";

export const NewsItem = [
  {
    id: 1,
    avatar: require("../../assets/images/avatar.png"),
    name: "Nguyễn Thị Mon",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
  {
    id: 2,
    avatar: require("../../assets/images/avatar.png"),
    name: "Trần Văn Đô",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
  {
    id: 3,
    avatar: require("../../assets/images/avatar.png"),
    name: "La Văn Rê",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
];

const NewItem = ({
  avatar,
  name,
  title,
  description,
  createAt,
  repliesCount,
}: {
  avatar: ImageSourcePropType;
  name: string;
  title: string;
  description: string;
  createAt: string;
  repliesCount: number;
}) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image source={avatar} style={{ width: 27, height: 20 }} />
        <Text style={{ fontSize: 18, fontWeight: "400", color: "#000" }}>
          {name}
        </Text>
        <FontAwesome
          name="bookmark"
          size={20}
          color="black"
          style={{ marginLeft: "auto" }}
        />
      </View>
      <View style={{ paddingTop: 12 }}>
        <Text style={{ fontSize: 17, fontWeight: "700" }}>{title}</Text>
        <Text style={{ fontSize: 17, fontWeight: "400", color: "#000" }}>
          {description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "400", color: "#989AA6" }}>
          {createAt}
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "400", color: "#000000" }}>
          {repliesCount} Phản hồi
        </Text>
      </View>
    </View>
  );
};

export default NewItem;
