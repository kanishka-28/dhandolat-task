import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useStyles } from "./styles";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
);

export default function Overview() {
    const classes = useStyles();
    return (
        <div className={classes.cardContainer}>
            <h2  className={classes.text2}>OVERVIEW</h2>
            <Typography className={classes.upperSection} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                ACCOUNT VALUE
            </Typography>
            <Typography className={classes.middleSection} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                $100,000.00
            </Typography>
            <div className={classes.lowerSection}>
                <div className={classes.leftLowerSection}>
                    <div>
                        <Typography className={classes.text} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Today's Exchange
                        </Typography>
                        <Typography className={classes.text2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            +$0.00
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.text} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            (0.00%)
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.text} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            BUYING POWER
                        </Typography>
                        <Typography className={classes.text} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            $100,000.00
                        </Typography>
                    </div>
                </div>
                <div className={classes.rightLowerSection}>
                <div>
                        <Typography className={classes.text} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Today's Exchange
                        </Typography>
                        <Typography className={classes.text2} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            +$0.00
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.text} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            BUYING POWER
                        </Typography>
                        <Typography className={classes.text} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            $100,000.00
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}
