import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStyles } from "./styles";
import tableData from './data';
import {BsSearch} from 'react-icons/bs'
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

export default function Watchlist() {
    const classes = useStyles();
    return (
        <div >
            <h2 className={classes.text2}>WATCHLIST</h2>
            <div className={classes.searchContainer}><BsSearch/> Search eg: infy bse, nifty fut weekly, gold mcx</div>
            <div className={classes.outerTableContainer}>
                <div className={classes.innerTableContainer}>
                    {tableData.map(data => (
                        <div className={classes.tableColumnLower}>
                            <p>{data.position}</p>
                            <div>{data.name} </div>
                            <p>{data.profit}</p>
                        </div>
                    ))}
                    <div className={classes.bottomSection}></div>
                </div>
            </div>
        </div>
    );
}
