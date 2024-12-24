import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import Image from "next/image";

interface ProjectProps {
  name: string;
  image?: string;
  url: string;
}

const Project: React.FC<ProjectProps> = ({ name, image, url }) => {
  return (
    <div className="w-fit m-auto animate-fadeInUp">
      <Card
        className="
          border-none
          bg-white dark:bg-gray-800
          rounded-lg
          shadow-md
          transform
          transition-transform
          transition-shadow
          duration-300
          ease-in-out
          hover:scale-105
          hover:shadow-xl
          hover:rotate-1
        "
        radius="lg"
      >
        <CardHeader className="flex justify-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center truncate w-full max-w-full whitespace-nowrap overflow-ellipsis">
            {name}
          </h3>
        </CardHeader>
        {image ? (
          <div className="flex items-center justify-center p-4">
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
    </div>
  );
};

export default Project;
