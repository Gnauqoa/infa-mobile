import { ReactNode } from "react";
import { NewsContextProvider } from "./New";

const ContextProvider = ({ children }: { children: ReactNode }) => {
  return <NewsContextProvider>{children}</NewsContextProvider>;
};

export default ContextProvider;
