import * as React from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';
import styles from "../styles/Home.module.css"
import Link from 'next/link';
export default function Sidebar2() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
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
    const languages = [
        "hindi",
        "english",
        "french",
        "tamil",
        "german",
    ]
    const router = useRouter();
    return (
        <div className={styles.accordionDiv}>
            <div className={styles.upperAccordionDiv}>
                {/* <div className={styles.upperInputContainer}>
                    <img src="" />
                </div> */}
                <div className={styles.inputContainer}>
                    <select name="languages" id="languages" className={styles.inputDropDown}>
                        {languages.map((lang) => (
                            <option value={`${lang}`}>{lang}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={styles.inputContainer} style={{ justifyContent: 'start', padding: '12px 0px', marginBottom: '2px' }}>
                <p style={{ fontWeight: 'bold', marginLeft: '2.6rem', fontSize: 'larger' }}>Title</p>
            </div>
            <Accordion style={{ backgroundColor: '#19344F', color: 'white', border: '0.1px solid #5090D3', borderRadius: '5px' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:'bold' }}>
                    Installation
                    </Typography>
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
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:'bold' }}>
                    Components
                    </Typography>
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
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight:'bold' }}>
                    System
                    </Typography>
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
    );
}
