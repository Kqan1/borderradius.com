export default function Notification() {
    const notifications: string[] = ["Notification 1", "Notification 1"];

    if (notifications.length === 0) {
        return (
            <div className="h-full w-full flex items-center justify-center">
                Bildiriminiz Bulunmamakta
            </div>
        ); 
    }

    return (
        <div className="h-full w-full">
            {notifications.map((notification, index) => (
                <div key={index} className="relative font-normal w-full text-base px-4 py-2 hover:bg-slate hover:bg-slate-400/10">
                    {notification}
                    <p className="absolute font-semibold rounded-sm select-none text-xs p-1 bg-slate-400/10 top-1/2 -translate-y-1/2 right-1">NEW!</p>
                </div>
            ))}
        </div>
    );
}