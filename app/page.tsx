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
import {
  ChevronDownIcon,
  GithubIcon,
  TwitterIcon,
  LinkedInIcons,
  HeartFilledIcon,
} from "@/components/icons";
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
            text-center
            relative
          "
        >
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-10 w-20 h-20 border-2 border-blue-400 dark:border-blue-600 rounded-full opacity-20 animate-spin-slow" />
          <div
            className="absolute bottom-1/3 left-10 w-16 h-16 border-2 border-purple-400 dark:border-purple-600 rounded-full opacity-20 animate-spin-slow"
            style={{ animationDuration: "8s", animationDirection: "reverse" }}
          />

          {/* Main content with staggered animation */}
          <div className="relative z-10 flex flex-col items-center">
            <h1
              className={`
                ${title({ color: "blue" })} 
                text-4xl 
                md:text-6xl 
                font-extrabold 
                mb-4 
                relative
                animate-fadeInUp
                !text-blue-600 dark:!text-blue-400
              `}
              style={{
                textShadow: "0 0 10px rgba(0,200,255,0.5)",
                animationDelay: "0.1s",
              }}
            >
              <span className="relative">
                TriForMine
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-shimmer" />
              </span>
            </h1>

            <h2
              className={`${subtitle({ class: "mt-4 max-w-2xl" })} animate-fadeInUp`}
              style={{ animationDelay: "0.3s" }}
            >
              I&apos;m the{" "}
              <span className="text-blue-500 dark:text-blue-400 font-semibold">
                creator of Isekai Maid
              </span>{" "}
              and other projects. I began programming at the age of 10 and have been passionate about development ever since. Below, you can
              explore my favorite technologies and projects!
            </h2>

            <div
              className="flex flex-wrap justify-center gap-3 mt-8 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <Link
                isExternal
                className={`${buttonStyles({ variant: "bordered", radius: "full" })} 
                  hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300
                  border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400
                `}
                href={siteConfig.links.github}
              >
                <GithubIcon className="mr-2" />
                GitHub
              </Link>

              <Link
                isExternal
                className={`${buttonStyles({ variant: "bordered", radius: "full" })} 
                  hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300
                  border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400
                `}
                href={siteConfig.links.linkedin}
              >
                <LinkedInIcons className="mr-2" />
                LinkedIn
              </Link>

              <Link
                isExternal
                className={`${buttonStyles({ variant: "bordered", radius: "full" })} 
                  hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300
                  border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400
                `}
                href={siteConfig.links.twitter}
              >
                <TwitterIcon className="mr-2" />
                Twitter
              </Link>

              <Link
                isExternal
                className={`${buttonStyles({ variant: "flat", radius: "full" })} 
                  bg-gradient-to-r from-red-500 to-pink-500 text-white
                  hover:opacity-90 transition-opacity duration-300
                `}
                href={siteConfig.links.sponsor}
              >
                <HeartFilledIcon className="mr-2" />
                Sponsor
              </Link>
            </div>
          </div>

          <Link
            aria-label="Scroll down"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white cursor-pointer animate-bounce mt-16 absolute bottom-10"
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
            gap-8
            py-16
            md:py-24
            relative
          "
          id="about"
        >
          {/* Background accent */}
          <div className="absolute right-0 top-1/4 w-64 h-64 bg-green-200 dark:bg-green-900/30 rounded-full filter blur-3xl opacity-30 -z-10" />

          <div className="max-w-4xl">
            <div className="text-center mb-10">
              <h1
                className={`${title({ color: "green" })} relative inline-block`}
              >
                About&nbsp;Me
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full" />
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Bio */}
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">
                  Who I Am
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I&apos;m TriForMine, a software developer with a decade of programming experience.
                  My journey in development began at age 10, and I&apos;m currently 20 years old.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  I&apos;m dedicated to creating useful applications and
                  actively contributing to open-source projects such as Discordeno.
                </p>

                {/* Languages */}
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Languages
                  </h4>
                  <ul className="space-y-1">
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">French:</span> Native
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">English:</span> Professional
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">
                      <span className="font-medium">Spanish:</span> Basic
                    </li>
                  </ul>
                </div>
              </div>

              {/* Skills & Expertise */}
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-4">
                  Skills & Expertise
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      JavaScript/TypeScript (Bun, Deno, Node.js)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      React/Next.js
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      SQL (PostgreSQL)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Rust
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      C++, C#, Python, Lua, Java, PHP, VB.NET
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="mt-8 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      M1 Informatique
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Université Côte d&apos;Azur
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">
                    2024 - Present
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      L3 Informatique, Double Licence Maths & Info (L1 & L2)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Université Côte d&apos;Azur
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      With Honors
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">
                    2021 - 2024
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      General Baccalaureate (Mathematics and Computer Science)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lycée du val d&apos;Argens
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      With Honors
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">
                    2018 - 2021
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mt-8 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Auto-entrepreneur
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      TFD Recrutement
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Frontend development for a company project as a
                      freelancer.
                    </p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">
                    2022 - 2023
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 mb-4">
                Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Build a Blockchain and a Cryptocurrency from Scratch
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">Udemy</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">
                    2018
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      Solidity & Ethereum with React/Next
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">Udemy</p>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-500 mt-1 md:mt-0">
                    2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES SECTION */}
        <section
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-8
            py-16
            md:py-24
            relative
          "
          id="technologies"
        >
          {/* Background accent */}
          <div className="absolute left-0 top-1/3 w-64 h-64 bg-cyan-200 dark:bg-cyan-900/30 rounded-full filter blur-3xl opacity-30 -z-10" />

          <div className="max-w-4xl text-center">
            <h1 className={`${title({ color: "cyan" })} relative inline-block`}>
              Technologies&nbsp;
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </h1>
            <h2 className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
              Here are some of the tools and technologies I frequently use in my
              projects:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            <Technology
              description="A language empowering everyone to build reliable and efficient software."
              icon={RustOriginal}
              name="Rust"
              url="https://www.rust-lang.org"
            />
            <Technology
              description="JavaScript with syntax for types, enhancing code quality and understandability."
              icon={TypescriptPlain}
              name="TypeScript"
              url="https://www.typescriptlang.org"
            />
            <Technology
              description="The React framework for production that enables server-side rendering."
              icon={NextjsOriginal}
              name="Next.js"
              url="https://nextjs.org"
            />
            <Technology
              description="A JavaScript library for building user interfaces with components."
              icon={ReactOriginal}
              name="React"
              url="https://reactjs.org"
            />
            <Technology
              description="Platform for developing, shipping, and running applications in containers."
              icon={DockerOriginal}
              name="Docker"
              url="https://www.docker.com"
            />
            <Technology
              description="Powerful, open source object-relational database system."
              icon={PostgresqlOriginal}
              name="PostgreSQL"
              url="https://www.postgresql.org"
            />
            <Technology
              description="In-memory data structure store used as database, cache, and message broker."
              icon={RedisOriginal}
              name="Redis"
              url="https://redis.io"
            />
            <Technology
              description="General-purpose programming language with a bias toward systems programming."
              icon={CplusplusOriginal}
              name="C++"
              url="https://isocpp.org"
            />
            <Technology
              description="Interpreted high-level programming language for general-purpose programming."
              icon={PythonOriginal}
              name="Python"
              url="https://www.python.org"
            />
            <Technology
              description="Elegant and type-safe object-oriented language that enables developers to build secure and robust applications."
              icon={CsharpOriginal}
              name="C#"
              url="https://docs.microsoft.com/en-us/dotnet/csharp"
            />
            <Technology
              description="Object-oriented programming language that produces software for multiple platforms."
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
            gap-8
            py-16
            md:py-24
            relative
          "
          id="projects"
        >
          {/* Background accent */}
          <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-pink-200 dark:bg-pink-900/30 rounded-full filter blur-3xl opacity-30 -z-10" />

          <div className="max-w-4xl text-center">
            <h1 className={`${title({ color: "pink" })} relative inline-block`}>
              Projects&nbsp;
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </h1>
            <h2 className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
              Take a look at some of the projects I&apos;ve built and am
              currently working on:
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 w-full max-w-6xl">
            <Project
              description="A waifu Discord bot project built using Discordeno, Bun, PostgreSQL, RabbitMQ, and Rust."
              image="/isekai-maid.png"
              name="Isekai Maid"
              tags={["TypeScript", "Discordeno", "PostgreSQL", "Rust"]}
              url="https://www.isekaimaid.com"
            />
            <Project
              description="A gaming platform that connects players and helps them discover new games."
              image="/gameow.svg"
              name="Gameow"
              tags={["React", "Next.js", "PostgreSQL", "Tailwind CSS"]}
              url="https://gameow.app"
            />
            <Project
              description="Contributions to the Discordeno project, a Discord API library."
              image="/discordeno.png"
              name="Discordeno"
              tags={["TypeScript", "Discord API", "Deno"]}
              url="https://github.com/discordeno/discordeno"
            />
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Interested in working together on a project?
            </p>
            <Link
              isExternal
              className={`
                ${buttonStyles({ variant: "flat", radius: "full" })}
                bg-gradient-to-r from-pink-500 to-purple-500
                text-white
                hover:opacity-90
                transition-all duration-300
                px-8
              `}
              href={`mailto:contact@triformine.dev`}
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
          className="
            flex
            flex-col
            items-center
            justify-center
            gap-8
            py-16
            md:py-24
            relative
          "
          id="contact"
        >
          {/* Background accent */}
          <div className="absolute left-0 bottom-1/3 w-64 h-64 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-3xl opacity-30 -z-10" />

          <div className="max-w-4xl text-center">
            <h1
              className={`${title({ color: "violet" })} relative inline-block`}
            >
              Get In Touch&nbsp;
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
            </h1>
            <h2 className={subtitle({ class: "mt-4 max-w-2xl mx-auto" })}>
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </h2>
          </div>

          <div className="w-full max-w-3xl mt-8">
            <div className="mx-auto max-w-2xl">
              {/* Contact Info */}
              <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <a
                        className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        href="mailto:contact@triformine.dev"
                      >
                        contact@triformine.dev
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Location
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">France</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Status
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Student and Auto-Entrepreneur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Objective
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Seeking cybersecurity apprenticeship
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 012 2v3a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a4 4 0 00-4-4h-3V6a1 1 0 00-1-1H3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Driver&apos;s License
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Class B, Automatic
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Discord
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        TriForMine
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4 flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-purple-600 dark:text-purple-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Keybase
                      </p>
                      <a
                        className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                        href="https://keybase.io/triformine"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        https://keybase.io/triformine
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      href={siteConfig.links.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GithubIcon className="text-gray-800 dark:text-gray-200" />
                    </a>
                    <a
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      href={siteConfig.links.twitter}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <TwitterIcon className="text-gray-800 dark:text-gray-200" />
                    </a>
                    <a
                      className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      href={siteConfig.links.linkedin}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <LinkedInIcons className="text-gray-800 dark:text-gray-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
