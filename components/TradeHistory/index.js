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

export default function TradeHistory() {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
            <h2 className={classes.text2}>TRADE HISTORY</h2>
            <div className={classes.tableHead}>
                <div className={classes.heading1}>Symbol</div>
                <h4>Current Price</h4>
                <h4>Today’s Change</h4>
                <h4>Purchase Price</h4>
                <h4>QTY</h4>
                <h4>Total value</h4>
                <h4>Total Gain/Loss</h4>
                <h4>Trade Actions</h4>
            </div>
            {tableData.map((data) => (
                <div className={classes.tableColumnLower}>
                    <div className={classes.textPurple}>{data.Symbol}</div>
                    <p>{data.Current} </p>
                    <p>{data.Today}</p>
                    <p>{data.Purchase}</p>
                    <p>{data.QTY}</p>
                    <p>{data.value}</p>
                    {data.positive?<p className={classes.textGreen}>{data.gainLoss}</p>:<p className={classes.textRed}>{data.gainLoss}</p>}
                    <p className={classes.textGreen}>{data.Trade}</p>
                </div>
            ))}
        </div>
    );
}
