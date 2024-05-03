export default function About() {

    return (
        <>
        <div className="mainContent font-bold p-4 sm:p-8 w-full overflow-hidden">
            <h1 className="mainTitle text-5xl md:text-7xl py-2">ABOUT ME</h1>
            <h3 className="text-3xl py-5 font-semibold md:w-3/4 lg:w-2/4">
                Get to Know Me: Sharing My Story, Passion, and Journey in Web Development.
            </h3>
            <div className="aboutWrapper">
                <div className="about1">
                    <h2 className="text-2xl pt-8 pb-3 font-bold">Hey there!</h2>
                    <p className="text-1xl font-normal w-full md:w-3/4 ">I'm Emil Cederslätt, a passionate frontend developer with a growing interest in backend technologies. I love crafting immersive digital experiences that blend code with creativity.</p>
                    <h2 className="text-2xl pt-8 pb-3 font-bold">My Journey</h2>
                    <p className="text-1xl font-normal md:w-3/4">My journey in web development started through a formal education program called Medieproduktion och processdesign at Malmö university. Since receiving my bachelor, I've been on a quest to hone my skills and explore the ever-evolving world of web technologies. Currently im studying at Lexicon Malmö, advanced training in programming and system development (C#, ASP.NET, MVC, ReactJS, NodeJS, SQL).</p>
                </div>
                <div className="about2">
                    <h2 className="text-2xl pt-8 pb-3 font-bold">Let's Connect</h2>
                    <p className="text-1xl font-normal md:w-3/4">I'm excited to collaborate, learn, and share ideas with fellow developers and creators. Feel free to reach out if you'd like to discuss projects, share insights, or simply geek out about all things web development!</p>
                </div>
            </div>
        </div>
    </>
    )
}