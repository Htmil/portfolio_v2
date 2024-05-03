export default function Card(data) {

    const handleCheckboxChange = (identifier) => {
        const overlay = document.querySelector(`.info-overlay-${identifier}`);
        overlay.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the overlay
    }
    const {id, projectName, projectDescription, src} = data;

    return (
        <div className="card flex flex-col justify-between">
            <div className="card-image image1 " style={{ backgroundImage: `url(${src})` }}>
                <div className={`info-overlay p-2 bg-white opacity-90 h-full hidden info-overlay-${id}`}>
                    <p className="w-full font-bold text-lg">{projectName}</p>
                    <p className="w-full">{projectDescription}</p>
                </div>
            </div>
            <div className="card-info h-1/6 flex justify-between align-top bg-white p-1">
                <p className="">{projectName}</p>
                <p className="text-sm">Toggle for more info <input type="checkbox" onChange={() => handleCheckboxChange(id)} /></p>
            </div>
        </div>
    )
}