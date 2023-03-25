import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'; 
import TextField from '@mui/material/TextField'; 
import { Button } from '@mui/material';
/* import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField'; */

const today = ()=>{
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear();
  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
}
const BookingPannel = () => { 
  const date = today();
  const [info, setInfo] = useState({
    form_location: 1,
    to_location: 0,
    guest: 0,
    date: date,
    class_name: 0,
  }); 
  
console.log(today());
  const handleChange = (e) => {
    const {name,value} = e.target;
    // console.log(name); 
    setInfo((perv)=>({
       ...perv,
       [name]:value
    }));
  }; 

  return (
    <>
      <div className='booking-pannel'>
          <div className='card'>
            <div>
                <Grid container spacing={2}> 
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel id="form-label">Form</InputLabel> 
                        <Select className='form-width' name='form_location' labelId="form-label" id="form-input" value={info.form_location} label="Form" onChange={handleChange}  >
                          <MenuItem value={1}>Dhaka </MenuItem>
                          <MenuItem value={2}>Cox's Bazar</MenuItem>
                          <MenuItem value={3}>Jessore</MenuItem>
                          <MenuItem value={4}>Chittagong</MenuItem>
                          <MenuItem value={5}>Saidpur</MenuItem>
                          <MenuItem value={6}>Sylhet Osmani</MenuItem>
                        </Select>
                    </FormControl>
                  </Grid>   
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                          <InputLabel id="to-label">To</InputLabel> 
                          <Select className='to-width' name='to_location'  labelId="to-label" id="to-input" value={info.to_location} label="to" onChange={handleChange}>
                            <MenuItem value={0}> Please Select </MenuItem>
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
                    <TextField type='date' name='date'  value={info.date} onChange={handleChange} ></TextField>
                  </Grid> 
                  <Grid item xs={2}>
                    <FormControl fullWidth>
                      <InputLabel id="guest-label">Guest</InputLabel> 
                      <Select className='guest-width' name='guest' labelId="guest-label" id="guest-input" value={info.guest} label="guest" onChange={handleChange} >
                        <MenuItem value={0}> Please Select </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
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
                      <Select className='class-width' name='class_name'  labelId="class-label" id="class-input" value={info.class_name} label="class" onChange={handleChange} >
                        <MenuItem value={0}> Please Select </MenuItem>
                        <MenuItem value={1}>Busieness Class</MenuItem>
                        <MenuItem value={2}>Economy Class</MenuItem> 
                      </Select>
                    </FormControl>
                  </Grid>  
                  <Grid item xs={2} style={{alignItems:'center'}}>
                   <Button  variant="outlined">Confirm</Button>
                  </Grid>  
                </Grid>
            </div>
          </div>
      </div>
    </>
  )
}

export default BookingPannel
