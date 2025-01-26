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

  const hour: number = currentDate.getHours();
  const minutes: number = currentDate.getMinutes();

  const onLogin = () => {
    location.replace("/eventos")
  }

  return (
    <main
      className="font-(family-name:--font-roboto) flex flex-col bg-(--color-primary) w-lvw h-lvh px-8 py-13 overflow-hidden justify-between"
    >
      <div className="flex items-center justify-between text-white text-xl w-full">
        <img src={Logo} alt="Logo" className="w-26 h-auto" />
        <p>
          {hour < 10 ? `0${hour}` : hour} : {minutes < 10 ? `0${minutes}` : minutes}
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center flex-auto h-114 bg-white rounded-3xl overflow-hidden mb-8">
          <img src={Banner} alt="Banner" className="w-full h-auto" />
        </div>

        <h1 className="text-(--color-greenhighlight) m-0 text-2xl font-bold mb-3">
          Sua bebida na palma da mão!
        </h1>

        <p className="text-neutral-400">Com apenas alguns cliques peça sua bebida de
          qualquer parte do evento, nós iremos até você.</p>
      </div>

      <div>
        <p className="text-sm text-white mb-7">Continuar como <strong>Matheus</strong> ou utilizar uma nova conta?</p>

        <div className="flex items-center justify-between">
          <button className="py-3 px-8 text-neutral-300 bg-neutral-400/20 border-2 border-neutral-100 rounded-full">
            Cadastrar
          </button>
          <button
            className="py-3 px-19 text-(--color-primary) font-medium bg-(--color-greenhighlight) rounded-full active:bg-(--color-greenhighlightactive)"
            onClick={onLogin}
          >
            Entrar
          </button>
        </div>
      </div>


    </main>
  )
}
