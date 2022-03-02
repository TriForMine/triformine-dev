import {IconButton, useTheme} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import * as React from 'react';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export const DarkModeSwitch = (props: any) => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <IconButton {...props} variant="ghost" aria-label="Toggle Dark Mode" onClick={colorMode.toggleColorMode}>{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}</IconButton>
    )
}
