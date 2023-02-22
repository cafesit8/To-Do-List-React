import { useState, useEffect } from "react";
import "./App.css";
import Contenido from "./components/Contenido";
import Formulario from "./components/Formulario";

function App() {
  const [listTarea, setListTarea] = useState([]);

  //eliminar tarea
  function eliminar(tarea) {
    const nuevaList = listTarea.filter((item) => !(item === tarea));
    setListTarea(nuevaList);
  }

  //agregar tarea nueva a la lista de tareas
  function addList(tarea) {
    //validamos si la tarea ya existe
    const filtrado = listTarea.find((item) => item === tarea);
    filtrado
      ? alert("ya existe la tarea")
      : setListTarea([...listTarea, tarea]);
  }

  //esto es para que cuando refresques la pag, no se borre el storage
  useEffect(() => {
    const lista = JSON.parse(localStorage.getItem("tareas"));
    if (lista) {
      setListTarea(lista);
    }
  }, []);

  //cada que cambia algo en listTarea, esto lo guarda en el storage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(listTarea));
  }, [listTarea]);

  return (
    <>
      <h1 className="text-center text-white mt-10 text-[30px]">Lista de Tareas</h1>
      <div className="App mx-auto mt-10 w-[500px] max-[600px]:w-[95%] text-white">
        <Formulario addList={addList} />
        <Contenido listTarea={listTarea} eliminar={eliminar} />
      </div>
    </>
  );
}

export default App;