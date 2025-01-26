import { storeItens } from "../../utils";

export default function StoreCards() {

    return (
        <div className="flex items-center justify-between gap-7 flex-wrap">
            {storeItens.map((item, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-between gap-1 bg-neutral-100 py-2 px-3 rounded-2xl border border-neutral-300 w-23"
                >
                    <span className="flex items-center justify-center w-13 h-13 bg-neutral-500 rounded-full">
                        <item.icon className="text-2xl text-(--color-greenhighlight) w-auto h-9" />
                    </span>
                    <p className="text-xs text-neutral-500 font-medium">{item.name}</p>
                </div>
            ))}
        </div>
    )
}