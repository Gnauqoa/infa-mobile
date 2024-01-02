import { FlatList, Image, View } from "react-native";

const Banners = [
  require("../../assets/images/banner1.png"),
  require("../../assets/images/banner2.png"),
  require("../../assets/images/banner3.png"),
  "",
];

const Carousel = () => {
  return (
    <FlatList
      horizontal={true}
      style={{
        height: 170,
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        rowGap: 24,
        marginHorizontal: 24,
        marginTop: 40,
      }}
      data={Banners}
      renderItem={({ item, index }) => {
        if (index === Banners.length - 1) return <View style={{ width: 48 }} />;
        return (
          <Image
            source={item}
            style={{
              height: 170,
              width: 330,
              marginHorizontal: 24,
              borderRadius: 24,
            }}
          />
        );
      }}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default Carousel;
