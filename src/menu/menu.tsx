import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem component={Link} to="/" onClick={handleClose}>Home</MenuItem>
                <MenuItem component={Link} to="/user/223" onClick={handleClose}>User</MenuItem>
                <MenuItem component={Link} to="/tictac" onClick={handleClose}>Tic Tac Toe</MenuItem>
                <MenuItem component={Link} to="/grid" onClick={handleClose}>Grid</MenuItem>
                <MenuItem component={Link} to="/chat" onClick={handleClose}>Chat</MenuItem>
                <MenuItem component={Link} to="/ref" onClick={handleClose}>Ref DOM</MenuItem>
                <MenuItem component={Link} to="/griddata" onClick={handleClose}>Grid GrapgQL</MenuItem>

            </Menu>
        </div>
    );
}
