import { FlatList, Text, View } from "react-native";
import useColors from "../../hooks/useColors";
import { MachineItem } from "../../components";

export const MachineList = [
  {
    id: 1,
    title: "Máy xới",
    star: 4.8,
    hired: 10,
    location: "Tiềng Giang",
    price: 7045000,
    source: require("../../assets/images/machine1.png"),
    description: "Siêu phẩm máy xới",
  },
  {
    id: 2,
    title: "Máy cày",
    star: 4.7,
    hired: 3,
    location: "Sóc Trăng",
    price: 405000,
    source: require("../../assets/images/machine2.png"),
    description: "Siêu phẩm máy cày",
  },
];

export const getMachine = (id: number | string) => {
  return MachineList.find((item) => item.id === Number(id));
};
const Machines = () => {
  const color = useColors();

  return (
    <View
      style={{
        marginTop: 44,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 24,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "700", color: "#303733" }}>
          Deal tốt
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: color.primary,
            marginLeft: "auto",
          }}
        >
          Tất cả
        </Text>
      </View>
      <View style={{ display: "flex", paddingTop: 27 }}>
        <FlatList
          horizontal={true}
          style={{
            flexDirection: "row",
            marginHorizontal: 24,
          }}
          data={MachineList}
          renderItem={({ item, index }) => {
            return <MachineItem {...item} />;
          }}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Machines;
