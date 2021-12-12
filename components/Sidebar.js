import * as React from 'react';
import { styled } from '@mui/material/styles';
import { BsChevronRight } from "react-icons/bs"
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import styles from "../styles/Home.module.css"
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from 'next/router';
import Link from 'next/link';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<BsChevronRight style={{color: 'white'}}/>}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const items = [
        { "name": "item-1" },
        { "name": "item-2" },
        { "name": "item-3" },
        { "name": "item-4" },
        { "name": "item-5" },
        { "name": "item-6" },
        { "name": "item-7" },
    ]
    const router = useRouter();
    return (
        <div className={styles.accordionDiv}>
            <div >
                <Accordion style={{backgroundColor: 'rgb(0, 30, 60)', color: 'white', border:'0.1px solid #5090D3'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography style={{ fontWeight: 'bold' }}>Installation</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {items.map((item) => (
                                <Link href={item.name}>
                                    <div className={styles.itemDiv}>{item.name}</div>
                                </Link>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: 'rgb(0, 30, 60)', color: 'white', border:'0.1px solid #5090D3'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography style={{ fontWeight: 'bold' }}>Installation-2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {items.map((item) => (
                                <Link href={item.name}>
                                    <div className={styles.itemDiv}>{item.name}</div>
                                </Link>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: 'rgb(0, 30, 60)', color: 'white', border:'0.1px solid #5090D3'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography style={{ fontWeight: 'bold' }}>Installation-3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {items.map((item) => (
                                <Link href={item.name}>
                                    <div className={styles.itemDiv}>{item.name}</div>
                                </Link>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
