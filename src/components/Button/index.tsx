import classNames from "classnames";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends ButtonProps {
  orangeBg?: boolean;
  roundedFull?: boolean;
}

const Button: React.FunctionComponent<Props> = ({
  children,
  orangeBg,
  roundedFull,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(className, "outline-none py-3 px-5", {
        "bg-[#FF7F5C]": orangeBg,
        "rounded-full": roundedFull,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
