export default function Curriculum() {

    return (
        <>
            <div className="mainContent font-bold p-4 sm:p-8 w-full">
                <h1 className=" mainTitle text-5xl md:text-7xl py-2">CURRICULUM VITAE</h1>
                <h3 className="text-3xl py-5 font-semibold md:w-3/4 lg:w-2/4">
                    Explore My Journey: A Detailed Look Into My Experience And Skills.
                </h3>

                <div className="cvWrapper font-normal block sm:grid">
                <div className="education col-span-2 font-normal">
                        <h2 className="text-3xl py-5 font-bold underline" >Education</h2>
                        <div className="infocard">
                            <h3 className="text-2xl font-semibold" >IT-påbyggnad, Lexicon Malmö, 2024 -</h3>
                            <p className="text-1xl pt-2">Advanced training in programming/system development.
                                [C#, ASP.NET, MVC, ReactJS, NodeJS, SQL]</p>
                        </div>
                        <div className="infocard">
                            <h3 className="text-2xl pt-5 font-semibold" >Malmö universitet, Medieproduktion och processdesign, 2019 - 2022</h3>
                            <p className="text-1xl pt-2">Bachelor's degree in the field of media technology. Program included courses in: programming, design, media production, marketing, and process management.</p>
                        </div>
                    </div>
                    <div className="experience col-span-2 lg:col-span-4">
                        <h2 className="text-3xl py-5 font-bold underline">Experience</h2>
                        <div className="infocard">
                            <h3 className="text-2xl font-semibold" >Malmö University - Teaching Assistant, 2020 - 2022</h3>
                            <p className="text-1xl pt-2 font-normal">My role involved assisting students with HTML & CSS in connection with the Web Publishing course ME153A. In addition to helping students with exercises and individual problems, I also had the opportunity to plan and present step-by-step solutions to larger exercises in front of small groups of students.</p>
                        </div>
                        <div className="infocard">
                            <h3 className="text-2xl pt-5 font-semibold">Kulturskolan in Landskrona - Teacher, 2007 - 2021</h3>
                            <p className="text-1xl pt-2 font-normal" >This job involved planning and teaching children of varying ages. In addition to teaching, I created performances and worked as a sound and lighting technician for both larger and smaller productions. </p>
                        </div>
                    </div>
                    <div className="contactInfo">
                        <h2 className="text-3xl py-5 font-bold underline">Contact information</h2>
                        <a className="" href="mailto:emil.cederslatt@gmail.com">emil.cederslatt@gmail.com.</a>
                        <a href="https://github.com/htmil"><p>Github.com/htmil</p></a>
                    </div>

                    <div className="skills font-normal">
                        <h2 className="text-3xl py-5 font-bold underline">Skills</h2>
                        <div className="skillList grid grid-cols-2 w-48">
                            <p>JS</p>
                            <p>ReactJS</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>C#</p>
                            <p>PHP</p>
                            <p>CMS</p>
                            <p>Tailwind</p>
                            <p>Bootstrap</p>
                            <p>GitHub</p>
                        </div>
                    </div>

                    <div className="languages font-normal text-1xl ">
                        <h2 className="text-3xl py-5 font-bold underline">Languages</h2>
                        <p>Swedish / Native</p>
                        <p>English / Fluent</p>
                        <p>Polish / Fluent in speech</p>
                    </div>
                </div>
            </div>
        </>
    )
}