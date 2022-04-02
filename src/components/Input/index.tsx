import classNames from "classnames";
import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends InputProps {
  theme: string;
  border?: boolean;
}

const Input: React.FunctionComponent<Props> = ({
  theme,
  className,
  border,
  ...props
}) => {
  return (
    <input
      {...props}
      className={classNames(
        "py-3 px-5 w-full rounded-[5px] outline-none text-black",
        className,
        {
          "bg-white placeholder:text-[#64607D]": theme === "white",
          "border border-[#DFE4F1] focus:border-[#5f5g5g]": border,
          "border-none": !border,
          "bg-[#F2F3F4] placeholder:text-[#BBB5E0] opacity-20":
            theme === "opacity",
        }
      )}
    />
  );
};

export default Input;
