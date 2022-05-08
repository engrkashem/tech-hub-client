import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuesOne from '../QuesOne/QuesOne';
import QuesTwo from '../QuesTwo/QuesTwo';
import QuesThree from '../QuesThree/QuesThree';
import QuesFour from '../QuesFour/QuesFour';

const Blog = () => {
    return (
        <div className=' h-full w-3/4 mx-auto my-16 '>
            <h1 className=' text-center font-bold text-4xl mb-10'> Conceptual Questions with Answers</h1>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>What are differences between JavaScript and NodeJs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <QuesOne></QuesOne>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>When to use NodeJs and MongoDb?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <QuesTwo></QuesTwo>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>What are differences between SQL and NoSQL database?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <QuesThree></QuesThree>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography>What is the purpose of jwt and how does it work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <QuesFour />
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Blog;