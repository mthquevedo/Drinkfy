import * as Dialog from "@radix-ui/react-dialog";
import Map from "./assets/Mapa.png"

export default function App() {
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
        <Dialog.Overlay className="bg-black/60 fixed w-screen inset-[0]" />
        <Dialog.Content className="font-(family-name:--font-roboto) flex flex-col bg-(--color-primary) rounded-t-3xl shadow-sm bottom-0 fixed w-full pt-6 pb-13 px-8 ">
          <Dialog.Title className="text-sm text-white font-normal pb-2">Confirme sua posição:</Dialog.Title>
          <Dialog.Description>
          </Dialog.Description>
          {/* <img src={Map} alt="Mapa" className="w-full h-auto" /> */}
          <div className="bg-[url(./assets/Mapa.png)] bg-cover w-full h-50 rounded-2xl mb-7" />

          <div className="flex flex-col justify-between mb-7">
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
          >
            Finalizar o pedido
          </button>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
