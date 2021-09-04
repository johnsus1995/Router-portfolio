import { FaPhone, FaEnvelope } from "react-icons/fa"

export const Contact = () => {
    return (
        <>
            <section className="contacts">
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="tel:08891562112"><FaPhone/>+91 8891562112</a></li>
                    <li><a href="mailto:thejohnjaison@yahoo.com"><FaEnvelope/>thejohnjaison@yahoo.com</a></li>
                </ul> 
            </section>
        </>
    )
}
