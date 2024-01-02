import { Input } from "../../atomic";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <Input
      containerProps={{
        style: {
          gap: 12,
          display: "flex",
          flexDirection: "row",

          backgroundColor: "#fff",
          borderRadius: 6,
          paddingHorizontal: 16,
          paddingVertical: 12,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.04,
          shadowRadius: 9,

          marginHorizontal: 24,
        },
      }}
      inputProps={{
        placeholder: "Tìm kiếm sản phẩm",
        placeholderTextColor: "#BBBBBB",
        style: { flex: 1 },
      }}
      startIcon={<EvilIcons name="search" size={20} color="#BBBBBB" />}
    />
  );
};

export default SearchBar;
