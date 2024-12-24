// app/page.tsx

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import {
  CplusplusOriginal,
  CsharpOriginal,
  DockerOriginal,
  JavaOriginal,
  NextjsOriginal,
  PostgresqlOriginal,
  PythonOriginal,
  ReactOriginal,
  RedisOriginal,
  RustOriginal,
  TypescriptPlain,
} from "devicons-react";

import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";
import { ChevronDownIcon, GithubIcon } from "@/components/icons";
import Technology from "@/components/Technology";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        text-gray-900
        dark:text-white
        overflow-hidden
      "
    >
      {/* Actual content container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 px-4">
        {/* HERO SECTION */}
        <section
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            py-16
            md:py-24
            min-h-dvh
            animate-fadeInUp
            text-center
          "
        >
          <h1
            className={`
              ${title({ color: "blue" })} 
              text-4xl 
              md:text-6xl 
              font-extrabold 
              mb-4 
              relative
            `}
            style={{ textShadow: "0 0 10px rgba(0,200,255,0.6)" }}
          >
            TriForMine
          </h1>
          <h2 className={subtitle({ class: "mt-4 max-w-2xl" })}>
            I&apos;m a freelance developer currently working on a few projects.
            I&apos;m also a student at Université Côte d&apos;Azur, studying
            computer science. Below you can check out my favorite technologies
            and projects!
          </h2>

          <div className="flex gap-3 mt-6">
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon className="mr-2" />
              GitHub
            </Link>
          </div>

          <Link
            aria-label="Scroll down"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white cursor-pointer animate-bounce mt-12"
            href="#about"
          >
            <ChevronDownIcon className={"w-8 h-8"} />
          </Link>
        </section>

        {/* ABOUT SECTION */}
        <section
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            py-16
            md:py-20
            animate-fadeInUp
          "
          id="about"
        >
          <div className="max-w-3xl text-center">
            <h1 className={title({ color: "green" })}>About&nbsp;Me</h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              When I&apos;m not coding, you might find me gaming, exploring new
              tech stacks, or contributing to open-source projects. I love
              building tools that make developers more productive and help
              people solve real-world problems. I&apos;m always eager to learn
              and collaborate on exciting projects.
            </h2>
          </div>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            py-16
            md:py-20
            animate-fadeInUp
          "
          id="technologies"
        >
          <div className="inline-block max-w-lg text-center">
            <h1 className={title({ color: "cyan" })}>Technologies&nbsp;</h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Here are some of the tools and technologies I love to use:
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 justify-center">
            <Technology
              icon={RustOriginal}
              name="Rust"
              url="https://www.rust-lang.org"
            />
            <Technology
              icon={TypescriptPlain}
              name="TypeScript"
              url="https://www.typescriptlang.org"
            />
            <Technology
              icon={NextjsOriginal}
              name="Next.js"
              url="https://nextjs.org"
            />
            <Technology
              icon={ReactOriginal}
              name="React"
              url="https://reactjs.org"
            />
            <Technology
              icon={DockerOriginal}
              name="Docker"
              url="https://www.docker.com"
            />
            <Technology
              icon={PostgresqlOriginal}
              name="PostgreSQL"
              url="https://www.postgresql.org"
            />
            <Technology
              icon={RedisOriginal}
              name="Redis"
              url="https://redis.io"
            />
            <Technology
              icon={CplusplusOriginal}
              name="C++"
              url="https://isocpp.org"
            />
            <Technology
              icon={PythonOriginal}
              name="Python"
              url="https://www.python.org"
            />
            <Technology
              icon={CsharpOriginal}
              name="C#"
              url="https://docs.microsoft.com/en-us/dotnet/csharp"
            />
            <Technology
              icon={JavaOriginal}
              name="Java"
              url="https://www.java.com"
            />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-4
            py-16
            md:py-20
            animate-fadeInUp
          "
          id="projects"
        >
          <div className="inline-block max-w-lg text-center">
            <h1 className={title({ color: "pink" })}>Projects&nbsp;</h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Take a look at some of the projects I&apos;ve built:
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 justify-center">
            <Project
              image="/isekai-maid.png"
              name="Isekai Maid"
              url="https://www.isekaimaid.com"
            />
            <Project
              image="/gameow.svg"
              name="Gameow"
              url="https://www.gameow.app"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
