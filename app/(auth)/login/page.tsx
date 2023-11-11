export default function login() {
    return (
        <main className="h-[calc(100vh-8rem)] w-full flex items-center">
            <div className="h-full w-7/12 p-4 flex items-center justify-center">
                <span className="text-7xl font-black font-mono" style={{fontSize: "35rem"}}>LOG IN</span>
            </div>
            <div className="h-full w-5/12 p-4 flex items-center justify-center">
                <form action="" className="flex flex-col" >
                    <label className="text-3xl" htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" />
                </form>
            </div>
        </main>
    );
}
