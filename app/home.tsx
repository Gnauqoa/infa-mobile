import { View } from "react-native";
import { AppBar, Carousel, SearchBar, Services } from "../section/home";

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
        position: "relative",
      }}
    >
      <AppBar />
      <SearchBar />
      <Carousel />
      <Services />
    </View>
  );
};

export default Home;
