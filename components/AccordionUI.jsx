'use client';
import { useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import AllUsers from './AllUsers';

const AccordionUI = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>Users</AccordionHeader>
        <AccordionBody>
          <AllUsers />
        </AccordionBody>
      </Accordion>
    </section>
  );
};
export default AccordionUI;
