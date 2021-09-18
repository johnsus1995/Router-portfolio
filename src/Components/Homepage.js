import { FaTwitter, FaGithub } from 'react-icons/fa'

const Homepage = () => {
    return (
        <>
            <section className='homepage'>
                <div className='overlay'>
                    <h1>Jaison John</h1>
                    <p>Front-end Developer</p>

                    <ul>
                        <li><a href='https://twitter.com/' target='_blank' rel="noopenner noreferrer"><FaTwitter /></a></li>
                        <li><a href='https://github.com/johnsus1995' target='_blank' rel="noopenner noreferrer"><FaGithub /></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Homepage
