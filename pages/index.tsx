import type { NextPage } from 'next'
import Hero from "../components/Hero";
import SkillSection from "../components/SkillsSection";

const Home: NextPage = () => {
    return (
        <>
            <Hero />

            <SkillSection  description="This is a non complete list, of the languages/technologies I use/used." title="Skills" />
        </>
    )
}

export default Home
