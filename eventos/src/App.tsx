import Notification from "./assets/filled-appointment-reminders.png"

export default function App() {
  const onCheckIn = () => {
    location.replace("/produtos")
  }

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
        <h3 className="font-bold text-(--color-primary) mb-2 mt-14">Meus Eventos</h3>
        <p className="text-neutral-500 mb-6">Quando chegar no local do evento, faça check-in
          para ter acesso aos nossos serviços.</p>

        <div className="flex flex-col justify-between gap-6">
          <div className="flex flex-col justify-between bg-(--color-primary) bg-[url(./assets/pexels-jibarofoto-2774556.jpg)] bg-cover bg-center py-4 px-3 h-28 rounded-3xl">
            <div>
              <p className="text-xs text-white">01/03/2025</p>
              <p className="font-bold text-white">Evento 1</p>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="py-1 px-4 text-(--color-primary) text-sm font-medium bg-(--color-greenhighlight) rounded-full active:bg-(--color-greenhighlightactive)"
                onClick={onCheckIn}
              >
                Check-in
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-(--color-primary) bg-[url(./assets/pexels-jibarofoto-2774556.jpg)] bg-cover bg-center py-4 px-3 h-28 rounded-3xl">
            <div>
              <p className="text-xs text-white">01/04/2025</p>
              <p className="font-bold text-white">Evento 2</p>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="py-1 px-4 text-(--color-primary) text-sm font-medium bg-neutral-400 rounded-full"
              >
                Check-in
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-(--color-primary) bg-[url(./assets/pexels-jibarofoto-2774556.jpg)] bg-cover bg-center py-4 px-3 h-28 rounded-3xl">
            <div>
              <p className="text-xs text-white">01/05/2025</p>
              <p className="font-bold text-white">Evento 3</p>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="py-1 px-4 text-(--color-primary) text-sm font-medium bg-neutral-400 rounded-full"
              >
                Check-in
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-(--color-primary) bg-[url(./assets/pexels-jibarofoto-2774556.jpg)] bg-cover bg-center py-4 px-3 h-28 rounded-3xl">
            <div>
              <p className="text-xs text-white">01/06/2025</p>
              <p className="font-bold text-white">Evento 4</p>
            </div>
            <div className="flex items-center justify-end">
              <button
                className="py-1 px-4 text-(--color-primary) text-sm font-medium bg-neutral-400 rounded-full"
              >
                Check-in
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <button
          className="py-3 w-full text-(--color-primary) bg-neutral-200 rounded-full active:bg-neutral-300"
        >
          Conferir eventos anteriores
        </button>
      </footer>
    </div>
  );
}