import { useState } from "react";
import { projectsdata } from "../data/projectsdata"
import {FaGithub} from "react-icons/fa"

const Projects = () => {
    //eslint-disable-next-line
    const [cards, setCards] = useState(projectsdata)
    return (
        <>
            <section className="projects">
                <h1>Projects page</h1>



                <div className="cards">
                    {cards.map(({ id, title, desc, github, demo, image }) =>
                    (
                        <article key={id}>
                            <img src={image} alt={title}></img>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <ul>
                                <li><a href={github} target="_blank" rel="noopenner noreferrer" className="github"><FaGithub/> Github</a></li>
                                <li><a href={demo} target="_blank" rel="noopenner noreferrer" className="demo">Demo</a></li>
                            </ul>
                        </article>
                    )
                    )}
                </div>
            </section>
        </>
    )
}

export default Projects
