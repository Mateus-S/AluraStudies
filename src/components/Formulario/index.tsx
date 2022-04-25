import React, { useState } from "react";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../Button";
import style from "./Formulario.module.scss";
import {v4 as uuidv4} from 'uuid';

interface Props{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}
function Formulario({setTarefas}: Props){
  const[tarefa, setTarefa] = useState("");
  const[tempo, setTempo] = useState("00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    setTarefas(tarefasAntigas =>
       [
         ...tarefasAntigas,
         {
           tarefa,
           tempo,
           selecionado: false,
           completado: false,
           id: uuidv4()
         }
       ]
    );
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo Estudo!</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={evento => setTarefa(evento.target.value)}
          placeholder="O que você quer Estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={evento => setTempo(evento.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Botao 
      type="submit"
      texto="Adicionar"/>
        
    </form>
  );
}

export default Formulario;
