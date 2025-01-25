import { useEffect, useState } from "react";
import { DateTimeFormatOptions } from "intl";
import Logo from "./assets/logo.png";
import Banner from "./assets/undraw_delivery-address_409g.png";

export default function App() {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date());
    }, 1000)
  }, []);

  const options: DateTimeFormatOptions = { day: "numeric", month: "long" };
  const formattedDate = currentDate.toLocaleDateString("pt-BR", options);
  const hour: number = currentDate.getHours();
  const minutes: number = currentDate.getMinutes();

  return (
    <main
      className="flex flex-col w-lvw h-lvh px-8 py-13 overflow-hidden justify-between"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="flex items-center justify-between text-white text-xl w-full">
        <img src={Logo} alt="Logo" className="w-26 h-auto" />
        <p>
          {hour < 10 ? `0${hour}` : hour} : {minutes < 10 ? `0${minutes}` : minutes}
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center flex-auto bg-white overflow-hidden">
          <img src={Banner} alt="Banner" className="w-26 h-auto" />
        </div>

        <h1
          className="m-0 text-2xl font-bold"
          style={{ color: "var(--color-greenhighlight)" }}
        >
          Sua bebida na palma da mão!
        </h1>

        <p>Com apenas alguns cliques peça sua bebida de
          qualquer parte do evento, nós iremos até você.</p>
      </div>

      <div>

      </div>


    </main>
  )
}
