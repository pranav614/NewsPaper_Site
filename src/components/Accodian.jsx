import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

export default function Accodian({nonFiltered}) {
  return (
    <div>
      <Accordion className=' bg-[#fbf1df] '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {nonFiltered.title}
        </AccordionSummary>
        <AccordionDetails>
        <Link to={nonFiltered.url}><div  class="btn btn-primary bg-black border-black">Click Here</div></Link>
        </AccordionDetails>
      </Accordion>
     
     
    </div>
  );
}