import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  isActive?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={styles.button + (isActive ? " " + styles.active : "")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
