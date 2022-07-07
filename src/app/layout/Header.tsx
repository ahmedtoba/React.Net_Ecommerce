import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    changeTheme: () => void;
}

export default function Header({darkMode, changeTheme}: Props) {
    
    return (
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h5">
                    React Shop
                </Typography>
                <Switch
                    checked={darkMode}
                    onChange={changeTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Toolbar>
        </AppBar>
    );
}