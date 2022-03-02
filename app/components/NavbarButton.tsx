import { Button, useTheme, Typography } from "@mui/material";
import {MouseEventHandler} from "react";
import {LocaleLink} from "./LocaleLink";

export const NavbarButton = (props: {name: string, href: string, className?: string, onClick?: MouseEventHandler | undefined}) => {
    const theme = useTheme();

    return (
        <Button
            aria-label={props.name}
            className={props.className}
            onClick={props.onClick}
            component={LocaleLink}
            to={props.href}
            variant="text"
        ><Typography aria-label={props.name} variant="button" sx={{color: theme.palette.text.primary}}>{props.name}</Typography></Button>
    );
};
