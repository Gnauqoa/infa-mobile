import { View } from "react-native";
import { AppBar, Carousel, SearchBar } from "../section/home";

const Home = () => {
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        paddingTop: 48,
        backgroundColor: "#fff",
      }}
    >
      <AppBar />
      <SearchBar />
      <Carousel />
    </View>
  );
};

export default Home;
