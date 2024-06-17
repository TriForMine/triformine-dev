import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
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
import { FunctionComponent, SVGProps } from "react";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { subtitle, title } from "@/components/primitives";
import { ChevronDownIcon, GithubIcon } from "@/components/icons";

const Technology = ({
  name,
  icon,
  url,
}: {
  name: string;
  icon?: FunctionComponent<SVGProps<SVGElement> & { size?: number | string }>;
  url: string;
}) => {
  return (
    <Card className="border-none" radius="lg">
      <CardHeader>
        <h3 className="text-lg font-semibold text-neutral text-center truncate w-full max-w-full whitespace-nowrap overflow-ellipsis">
          {name}
        </h3>
      </CardHeader>
      {icon ? (
        <div className="flex items-center justify-center">
          {icon({ size: 64 })}
        </div>
      ) : null}
      <CardFooter className="flex justify-center">
        <Link
          isExternal
          aria-label={`Learn more about ${name}`}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={url}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

const Project = ({
  name,
  image,
  url,
}: {
  name: string;
  image?: string;
  url: string;
}) => {
  return (
    <Card className="border-none" radius="lg">
      <CardHeader>
        <h3 className="text-lg font-semibold text-neutral text-center truncate w-full max-w-full whitespace-nowrap overflow-ellipsis">
          {name}
        </h3>
      </CardHeader>
      {image ? (
        <div className="flex items-center justify-center">
          <Image
            alt={name}
            className="rounded-full object-cover shadow-lg"
            height={64}
            src={image}
            width={64}
          />
        </div>
      ) : null}
      <CardFooter className="flex justify-center">
        <Link
          isExternal
          aria-label={`Learn more about ${name}`}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={url}
        >
          Learn More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-4">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 min-h-dvh">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ color: "blue" })}>TriForMine&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            I&apos;m a freelance developer currently working on a few projects.
            I&apos;m also a student at the Université Cote D&apos;Azur. I&apos;m
            currently studying computer science.
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <Link
          aria-label="Scroll to technologies"
          className="text-neutral hover:text-neutral-dark cursor-pointer animate-bounce mt-8"
          href="/#technologies"
        >
          <ChevronDownIcon className={"w-6 h-6"} />
        </Link>
      </section>

      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
        id="technologies"
      >
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Technologies&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Here are some of the technologies I have experience with.
          </h2>

          <div className="flex flex-wrap gap-4 mt-8 justify-center">
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
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center gap-4 py-8 md:py-10"
        id="projects"
      >
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Projects&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Here are some of the projects I&apos;ve worked on.
          </h2>

          <div className="flex flex-wrap gap-4 mt-8 justify-center">
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
        </div>
      </section>
    </div>
  );
}
