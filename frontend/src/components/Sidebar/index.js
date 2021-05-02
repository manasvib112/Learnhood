import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import './style.css'

const Filter = ({ options }) => {
  console.log(options)
  return (
    <div className='filter-main'>
      <h1 className='filter-main title'>Filters</h1>
      <Accordion>
        <AccordionSummary>Subject</AccordionSummary>
        <AccordionDetails>
          <div className='filter-option-list'>
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Subject</AccordionSummary>
        <AccordionDetails>
          <div className='filter-option-list'>
            <FormControlLabel
              control={
                <Checkbox
                  name='checkedB'
                  color='primary'
                  icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                  checkedIcon={<CheckBoxIcon fontSize='small' />}
                />
              }
              label='Primary'
            />
            <FormControlLabel
              control={
                <Checkbox
                  name='checkedB'
                  color='primary'
                  icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                  checkedIcon={<CheckBoxIcon fontSize='small' />}
                />
              }
              label='Primary'
            />
            <FormControlLabel
              control={
                <Checkbox
                  name='checkedB'
                  color='primary'
                  icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                  checkedIcon={<CheckBoxIcon fontSize='small' />}
                />
              }
              label='Primary'
            />
            <FormControlLabel
              control={
                <Checkbox
                  name='checkedB'
                  color='primary'
                  icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
                  checkedIcon={<CheckBoxIcon fontSize='small' />}
                />
              }
              label='Primary'
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>Subject</AccordionSummary>
        <AccordionDetails>
          <div className='filter-option-list'>
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
            <FormControlLabel
              control={<Checkbox name='checkedB' color='primary' />}
              label='Primary'
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default function Sidebar({ filter }) {
  //   console.log(filter)
  return (
    <div className='sidebar-container'>
      <div className='sidebar-main'>
        {filter ? <Filter options={filter} /> : null}
      </div>
    </div>
  )
}
