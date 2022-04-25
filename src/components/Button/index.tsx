import React from "react";
import { text } from "stream/consumers";
import style from "./Botao.module.scss";

interface Props {
  texto?: string | "button";
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Botao({ onClick, type, children, texto }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
      {texto}
    </button>
  );
}

export default Botao;
