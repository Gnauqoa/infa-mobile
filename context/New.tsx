import {
  type ReactNode,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { NewsItemType } from "../components/NewItem";

const NewsItem: NewsItemType[] = [
  {
    id: 3,
    avatar: require("../assets/images/avatar.png"),
    name: "Nguyễn Thị Mon",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
  {
    id: 2,
    avatar: require("../assets/images/avatar.png"),
    name: "Trần Văn Đô",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
  {
    id: 1,
    avatar: require("../assets/images/avatar.png"),
    name: "La Văn Rê",
    title: "Cần mua 6 ký ổi",
    description: "Cần mua gấp sáu ký ổi giao làng Đại học...",
    createAt: "24 phút trước",
    repliesCount: 35,
  },
];
export type NewsContextType = {
  items: NewsItemType[];
  setItems: Dispatch<SetStateAction<NewsItemType[]>>;
};

const NewsContext = createContext<NewsContextType | null>(null);

export const NewsContextProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<NewsItemType[]>(NewsItem);
  return (
    <NewsContext.Provider value={{ items, setItems }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
