import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

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
                        <Select className='form-width'  labelId="form-label" id="form-input" value={formLocation} label="Form" onChange={handleChange} >
                          <MenuItem selected value={1}>Dhaka</MenuItem>
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
                          <Select className='to-width'  labelId="to-label" id="to-input" value={formLocation} label="to" onChange={handleChange} >
                            <MenuItem selected value={1}>Dhaka</MenuItem>
                            <MenuItem value={2}>Cox's Bazar</MenuItem>
                            <MenuItem value={3}>Jessore</MenuItem>
                            <MenuItem value={4}>Chittagong</MenuItem>
                            <MenuItem value={5}>Saidpur</MenuItem>
                            <MenuItem value={6}>Sylhet Osmani</MenuItem>
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
