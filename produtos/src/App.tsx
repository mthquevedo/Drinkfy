import Notification from "./assets/filled-appointment-reminders.png"
import StoreCards from "./components/StoreCards";
import { IoIosSearch } from "react-icons/io";

export default function App() {

  return (
    <div
      className="font-(family-name:--font-roboto) flex flex-col w-lvw h-lvh px-8 py-13 overflow-hidden justify-between"
    >
      <header className="flex items-center justify-between w-full">
        <p className="text-(--color-primary) text-2xl font-bold">
          Olá, Matheus!
        </p>
        <span className="p-2 bg-neutral-200 rounded-full active:bg-neutral-300">
          <img src={Notification} alt="Logo" className="w-6 h-auto" />
        </span>
      </header>

      <main className="flex-auto">
        <h3 className="font-medium text-(--color-primary) mb-2 mt-14 text-sm">Não encontrou a bebida que procurava? Busque abaixo</h3>
        <div className="relative w-full bg-neutral-200 rounded-full flex items-center px-3 py-2 mb-6">
          <IoIosSearch className="text-gray-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Digite a bebida desejada"
            className="text-sm text-neutral-600 placeholder:text-neutral-600 outline-none w-full pl-2"
          />
        </div>

        <StoreCards />
      </main>

      <footer>
        <button
          className="py-3 w-full text-(--color-primary) font-medium bg-(--color-greenhighlight) rounded-full active:bg-(--color-greenhighlightactive)"
        >
          Ir ao carrinho
        </button>
      </footer>
    </div>
  );
}