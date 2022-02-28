/* eslint react/display-name: 0 */

import {Button, useColorModeValue} from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react"
import {forwardRef, ReactElement} from "react";
import {MouseEventHandler} from "react";
import {NavLink} from "remix";
import {LocaleLink} from "./LocaleLink";

const NavbarButtonRaw = forwardRef((props: {name: string, href: string, className?: string, onClick?: MouseEventHandler | undefined, rightIcon?: ReactElement}, ref) => {
    const activeColor = useColorModeValue("black.500", "cyan.200");
    const nonActiveColor = useColorModeValue("gray.300", "gray.500");

    const button = (
        <Button
            // @ts-ignore
            ref={ref}
            variant="ghost"
            aria-label={props.name}
            className={props.className}
            w="100%"
            size="md"
            borderBottom="1px"
            borderRadius="0px"
            {...(props.href ? {as: "a"} : {})}
            onClick={props.onClick}
            rightIcon={props.rightIcon}
        >{props.name}</Button>
    );

    return props.href ? <LocaleLink style={({ isActive }) => {
        return isActive ? {
            borderColor: activeColor
        } : {
            borderColor: nonActiveColor
        }
    }
    } to={props.href}>{button}</LocaleLink> : button;
});

export const NavbarButton = chakra(NavbarButtonRaw);
