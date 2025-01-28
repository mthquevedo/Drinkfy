import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { BiHappy } from "react-icons/bi";

export default function App() {
  const [isSaleFinished, setIsSaleFinished] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="py-3 w-full text-(--color-primary) font-medium bg-(--color-greenhighlight) rounded-full active:bg-(--color-greenhighlightactive)"
        >
          Ir ao carrinho
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-black/60 fixed w-screen inset-[0]" />
        <Dialog.Content className=" font-(family-name:--font-roboto) flex flex-col bg-(--color-primary) rounded-t-3xl shadow-sm bottom-0 fixed w-full h-(--height-50v) pt-6 pb-13 px-8 ">
          <Dialog.Title ></Dialog.Title>
          <Dialog.Description>
          </Dialog.Description>

          {isSaleFinished ?
            <div className="flex flex-col items-center justify-center h-full">
              <span className="bg-(--color-primary) fixed top-(--height-49v) mt-1 w-16 h-4 border-2 border-neutral-300 rounded-full" />
              <span className="flex items-center justify-center bg-(--color-greenhighlight) size-28 rounded-full mb-8">
                <BiHappy className="w-22 h-auto text-(--color-primary)" />
              </span>
              <p className="font-medium text-2xl text-center text-white">Obrigado pela preferência!</p>
            </div>
            :
            <div className="flex flex-col items-center justify-center">
              <span className="bg-(--color-primary) fixed top-(--height-49v) mt-1 w-16 h-4 border-2 border-neutral-300 rounded-full" />
              <h2 className="self-start text-sm text-white font-normal pb-2">Confirme sua posição:</h2>

              <div className="bg-[url(./assets/Mapa.png)] bg-cover w-full h-50 rounded-2xl mb-7" />
              <div className="flex flex-col justify-between w-full mb-7">
                <div className="flex items-center justify-between text-white">
                  <p>Total:</p>
                  <p className="font-light text-neutral-300">R$ 20,00</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Forma de pagamento:</p>
                  <p className="font-light text-neutral-300">Débito</p>
                </div>
                <div className="flex items-center justify-between text-white">
                  <p>Previsão de entrega:</p>
                  <p className="font-light text-neutral-300">5 minutos</p>
                </div>
              </div>
              <button
                className="py-3 w-full text-(--color-primary) font-medium bg-(--color-greenhighlight) rounded-full active:bg-(--color-greenhighlightactive)"
                onClick={() => setIsSaleFinished(!isSaleFinished)}
              >
                Finalizar o pedido
              </button>
            </div>
          }
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
