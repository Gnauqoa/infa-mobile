import { Image, ImageProps } from "@rneui/base";

const Logo = ({ source, ...props }: ImageProps) => {
  return (
    <Image
      style={{ width: 324.5, height: "auto" }}
      source={source || require("../../assets/logo/Logo.svg")}
      {...props}
    />
  );
};

export default Logo;
