export default function Home() {

    return (
        <>
        <div className="mainContent font-bold p-4 sm:p-8 w-full">
            <h1 className="text-5xl md:text-7xl py-2">EMIL CEDERSLÄTT</h1>
            <h1 className="mainTitle text-5xl md:text-7xl">FRONT-END DEVELOPER</h1>
            <h3 className="text-3xl py-5 font-semibold md:w-3/4 lg:w-2/4">
                Currently diving into C# and Back-end Magic, crafting immersive digital
                experiences with code and creativity.
            </h3>
            {/* <button className="p-4 bg-gray-900 text-white rounded-md">
                emil.cederslatt@gmail.com
            </button> */}
            <div className="profileImage sm:w-1/2 sm:h-1/2 lg:h-4/6 xl:h-5/6 xl:w-2/5"></div>
        </div>
    </>
    )
}