import Link from "next/link";
import Head from "next/head";
function About() {
    return (
        <>
            <Head>
                <title>About</title>
            </Head>
            <div className="container m-auto leading-relaxed p-5 bg-gradient-to-r from-purple-300 to-pink-300 rounded-xl shadow-xl">
                <h1 className="text-2xl font-black">About</h1>
                <p className="tracking-wide leading-relaxed md:text-justify mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos incidunt doloremque eaque atque expedita dolores, soluta cum praesentium pariatur, odit consectetur voluptatum voluptatibus saepe cumque numquam impedit unde! Odio ad nobis ratione, magnam aut ex consectetur magni iusto repellendus aperiam necessitatibus quo corrupti expedita quisquam modi ipsa facilis distinctio pariatur quia animi quasi! Dolor voluptatibus cum vitae odio quia reiciendis consequatur culpa placeat alias consectetur eligendi expedita ex velit commodi, suscipit amet ab unde quibusdam temporibus, quidem maiores? Molestias magnam quas ad dolorem dolorum distinctio et doloremque eius blanditiis magni quis vel delectus voluptatum qui, error eaque neque repellendus incidunt?</p>
            </div>
        </>
    )
}

export default About;