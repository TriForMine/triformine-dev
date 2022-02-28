import { useParams, NavLink } from "remix";
import type {RemixNavLinkProps} from "@remix-run/react/components";

/**
 * Get a link with the current locale parameter
 * @returns A localized <Link>
 */
export const LocaleLink: React.FC<
    RemixNavLinkProps & React.RefAttributes<HTMLAnchorElement>
    > = ({ children, ...args }) => {
    const { locale } = useParams();

    return (
        <NavLink {...args} to={`/${locale}${args.to}`}>
            {children}
        </NavLink>
    );
};
