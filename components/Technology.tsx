import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { FunctionComponent, SVGProps } from "react";

interface TechnologyProps {
  name: string;
  icon?: FunctionComponent<SVGProps<SVGElement> & { size?: number | string }>;
  url: string;
  description?: string;
}

const Technology: React.FC<TechnologyProps> = ({
  name,
  icon,
  url,
  description = "A technology I use in my projects.",
}) => {

  return (
    <div
      className="w-64 m-auto animate-fadeInUp"
    >
      <Card
        className="
          border-none
          bg-white/80 dark:bg-gray-800/80
          backdrop-blur-sm
          rounded-xl
          shadow-md
          transform
          transition-all
          duration-500
          ease-in-out
          hover:shadow-xl
          hover:scale-105
          overflow-hidden
          h-full
        "
        radius="lg"
      >
        <CardHeader className="flex flex-col items-center justify-center pt-6 pb-2">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 text-center">
            {name}
          </h3>
        </CardHeader>

        {icon ? (
          <div
            className="
              flex items-center justify-center p-4
              transition-transform duration-500 ease-in-out
              scale-100 hover:scale-110
            "
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30">
              {icon({
                size: 64,
                className: `
                  transition-all duration-500
                  hover:drop-shadow-lg
                `,
              })}
            </div>
          </div>
        ) : null}

        <CardBody className="text-center px-4 py-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </CardBody>

        <CardFooter className="flex justify-center pb-6">
          <Link
            isExternal
            aria-label={`Learn more about ${name}`}
            className={`
              ${buttonStyles({ variant: "bordered", radius: "full" })}
              border-cyan-500 dark:border-cyan-400
              text-cyan-600 dark:text-cyan-400
              hover:bg-cyan-100 dark:hover:bg-cyan-900/30
              transition-all duration-300
            `}
            href={url}
          >
            Learn More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Technology;
