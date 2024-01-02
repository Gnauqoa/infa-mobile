import { FlatList, View } from "react-native";
import NewItem, { NewsItem } from "../../components/NewItem";

const Items = () => {
  return (
    <View style={{ display: "flex", width: "100%" }}>
      <FlatList
        style={{
          flexDirection: "row",
          marginTop: 40,
        }}
        data={NewsItem}
        renderItem={({ item }) => {
          return (
            <View
              style={{ marginTop: 40, width: "100%", flex: 1, display: "flex" }}
            >
              <NewItem {...item} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Items;
