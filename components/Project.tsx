import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";

interface ProjectProps {
  name: string;
  image?: string;
  url: string;
  description?: string;
  tags?: string[];
  status?: "completed" | "in-progress" | "planned";
}

const Project: React.FC<ProjectProps> = ({
  name,
  image,
  url,
  description = "A project I've been working on.",
  tags = [],
  status = "completed",
}) => {
  // Status colors
  const statusColors = {
    completed: "success",
    "in-progress": "warning",
    planned: "secondary",
  };

  // Status labels
  const statusLabels = {
    completed: "Completed",
    "in-progress": "In Progress",
    planned: "Planned",
  };

  return (
    <div
      className="w-full max-w-md m-auto animate-fadeInUp"
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
          hover:scale-102
          overflow-hidden
          h-full
        "
        radius="lg"
      >
        <CardHeader className="flex flex-col items-start p-5 pb-0">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {name}
            </h3>
            <Chip color={statusColors[status] as any} size="sm" variant="flat">
              {statusLabels[status]}
            </Chip>
          </div>
        </CardHeader>

        <CardBody className="p-5">
          {image ? (
            <div
              className="
                relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full
                transition-all duration-500
                hover:shadow-lg hover:scale-[1.02]
              "
            >
              <Image
                fill
                alt={name}
                className="object-cover object-center transform transition-transform duration-500 ease-in-out scale-100 hover:scale-105"
                src={image}
              />
            </div>
          ) : null}

          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Chip
                  key={index}
                  className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
                  color="primary"
                  size="sm"
                  variant="flat"
                >
                  {tag}
                </Chip>
              ))}
            </div>
          )}
        </CardBody>

        <CardFooter className="flex justify-end p-5 pt-0">
          <Link
            isExternal
            aria-label={`Visit ${name}`}
            className={`
              ${buttonStyles({ variant: "flat", radius: "full" })}
              bg-gradient-to-r from-pink-500 to-purple-500
              text-white
              hover:opacity-90
              transition-all duration-300
            `}
            href={url}
          >
            Visit Project
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Project;
