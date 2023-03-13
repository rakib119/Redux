import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'; 
import TextField from '@mui/material/TextField'; 
/* import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField'; */


const BookingPannel = () => { 
  const [formLocation, setFormLocation] = useState('');

  const handleChange = (event) => {
    setFormLocation(event.target.value);
  };

  return (
    <>
      <div className='booking-pannel'>
          <div className='card'>
                <Grid container spacing={2}> 
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                        <InputLabel id="form-label">Form</InputLabel> 
                        <Select className='form-width'  labelId="form-label" id="form-input" value={formLocation} label="Form" onChange={handleChange} defaultValue='1'>
                          <MenuItem value={1}>Dhaka </MenuItem>
                          <MenuItem value={2}>Cox's Bazar</MenuItem>
                          <MenuItem value={3}>Jessore</MenuItem>
                          <MenuItem value={4}>Chittagong</MenuItem>
                          <MenuItem value={5}>Saidpur</MenuItem>
                          <MenuItem value={6}>Sylhet Osmani</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>   
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                          <InputLabel id="to-label">To</InputLabel> 
                          <Select className='to-width'  labelId="to-label" id="to-input" value={formLocation} label="to" onChange={handleChange}>
                            <MenuItem value={1}> Please Select </MenuItem>
                            <MenuItem value={1}>Dhaka</MenuItem>
                            <MenuItem value={2}>Cox's Bazar</MenuItem>
                            <MenuItem value={3}>Jessore</MenuItem>
                            <MenuItem value={4}>Chittagong</MenuItem>
                            <MenuItem value={5}>Saidpur</MenuItem>
                            <MenuItem value={6}>Sylhet Osmani</MenuItem>
                          </Select>
                    </FormControl>
                  </Grid>  


                  <Grid item xs={2}>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DateField']}>
                        <DateField label="Basic date field" />
                      </DemoContainer>
                    </LocalizationProvider> */}
                    <TextField type='date'></TextField>
                  </Grid> 




                  
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="guest-label">Guest</InputLabel> 
                      <Select className='guest-width'  labelId="guest-label" id="guest-input" value={formLocation} label="guest" onChange={handleChange} >
                        <MenuItem selected value={0}> Please Select </MenuItem>
                        <MenuItem selected value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>  
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="class-label">Class Name</InputLabel> 
                      <Select className='class-width'  labelId="class-label" id="class-input" value={formLocation} label="class" onChange={handleChange} >
                        <MenuItem selected value={0}> Please Select </MenuItem>
                        <MenuItem selected value={1}>Busieness Class</MenuItem>
                        <MenuItem value={2}>Economy Class</MenuItem> 
                      </Select>
                    </FormControl>
                  </Grid>  
                </Grid>
          </div>
      </div>
    </>
  )
}

export default BookingPannel
