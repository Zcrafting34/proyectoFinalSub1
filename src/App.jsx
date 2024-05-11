import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <section className="sec content-center justify-center items-center">
      <h3 className="text-4xl font-mono mx-10 my-4">Datos personales</h3>
      <div class="">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="inline-flex">
            <div class="mb-4 mx-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Nombre
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Fecha de Nacimiento
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="date"
                placeholder="Fecha"
              />
            </div>
          </div>
          <div className="inline-flex">
            <div class="mb-4 mx-1">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Edad
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="edad"
                type="number"
                placeholder="Edad"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                CURP
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="curp"
                type="text"
                placeholder="Ejem: BEGC070603hmclrna1"
              />
            </div>
            <div class="mb-4 mx-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Sueldo
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="sueldo"
                type="amount"
                placeholder="$"
              />
            </div>
          </div>

          <div class="mb-4 mx-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Lugar
            </label>
            <select
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="sueldo"
              type="text"
              placeholder="Mexico"
            >
              <option value="Xonacatlan">Xonacatlan</option>
              <option value="Lerma">Lerma</option>
              <option value="Zolotepec">Zolotepec</option>
              <option value="Atarasquillo">Atarasquillo</option>
            </select>
          </div>

          <div className="bg-white shadow-xl rounded px-10 pt-6 pb-8 mb-4">
            <h3 className="text-dark font-mono font-extrabold text-3xl my-4">Hobies</h3>
            <div className="grid grid-cols-1">
              <div className="inline/flex">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Programar</label>
              </div>
              <div className="inline/flex">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Futbol</label>
              </div>
              <div className="inline/flex">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Ajedrez</label>
              </div>
              <div className="inline/flex">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Dibujar</label>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-start">
            <button
              class=" mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="reseat"
            >
              Limpiar
            </button>

          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 Cristian Emmanuel. Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
}

export default App;
