import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStyles } from "./styles";
import tableData from './data';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

export default function Leaderboard() {
    const classes = useStyles();
    return (
        <div className={classes.cardcontainer}>
            <h2 className={classes.text2}>LEADERBOARD</h2>
            <div className={classes.upperTable}>
                <div className={classes.tableHead}>
                    <h4>YOUR POSITION</h4>
                    <h4>USER NAME</h4>
                    <h4>PROFIT</h4>
                    <h4>TRADES</h4>
                </div>
                <div className={classes.tableColumn}>
                    <p>34</p>
                    <div> ABCD</div>
                    <p>1.049</p>
                    <p>432</p>
                </div>
            </div>
            <div className={classes.upperTable}>
                <div className={classes.tableHead}>
                    <h4>POSITIONS</h4>
                    <h4>ALL ENTRIES(786)</h4>
                    <h4>PROFIT</h4>
                    <h4>TRADES</h4>
                </div>
                    {tableData.map(data=>(
                <div className={classes.tableColumnLower}>
                      
                        <p>{data.position}</p>
                        <div>{data.name} </div>
                        <p>{data.profit}</p>
                        <p>{data.trades}</p>
                </div>
                    ))}
            </div>
            <button className={classes.btn}>See More</button>
        </div>
    );
}
