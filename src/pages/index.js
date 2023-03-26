import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'; 
import TextField from '@mui/material/TextField'; 
import {  Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'; 
import { bookingList } from '../features/slice/bookingSlice';
/* import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField'; */


const BookingPannel = () => { 
  let airport = ['Dhaka',"Cox's Bazar","Jessore","Chittagong","Saidpur","Sylhet Osmani"];
  let member = [1,2,3,4,5,6];
  let classList = ['Busieness Class','Economy Class'];
  const booking_list = useSelector(state=>state.bookingList.booking);
  const today = ()=>{
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    const currentDate = `${year}-${month}-${day}`;
    return currentDate;
  }
  const dispatch = useDispatch() ;
  const date = today();
  const [info, setInfo] = useState({
    form_location: 1,
    to_location: 0,
    guest: 0,
    date: date,
    class_name: 0,
  }); 
  const [bookingItems,setBookingItems] = useState([]);

  const handleChange = (e) => {

    const {name,value} = e.target;
    // console.log(name); 
    setInfo((perv)=>({
       ...perv,
       [name]:value
    }));
    setErrorMsg(name+'Error',null);
  }; 
  const setErrorMsg = (property,value)=>{
    SetError((perv)=>({
      ...perv,
      [property]:value
   }));
  }
  const [errors,SetError] = useState({
    form_locationError:null,
    to_locationError:null,
    guestError:null,
    dateError:null,
    class_nameError:null,
  });  
// useEffect(() => {
//   if (bookingItems.length) {
//     dispatch(bookingList(bookingItems)); 
//     localStorage.setItem('bookingList', JSON.stringify(bookingItems));
//     // alert('Send data into storage'); 
//   }
  
// }, [bookingItems]);
const handleSubmit = ()=>{
  if(info.form_location && info.to_location && info.guest && info.date && info.class_name){ 
    // console.log(bookingItems);
    // if (bookingItems.length === 0) {
    //   setBookingItems(perv=>perv.concat(info));
    // }
    setBookingItems(perv=>perv.concat(info));
    dispatch(bookingList(bookingItems)); 
    localStorage.setItem('bookingList', JSON.stringify(bookingItems));
      
   
  }else{
    if (!info.form_location) {
      setErrorMsg('form_locationError','Form field is required'); 
    }
    if (!info.to_location) {
      setErrorMsg('to_locationError','To field is required'); 
    }
    if (!info.guest) {
      setErrorMsg('guestError','Guest field is required'); 
    }
    if (!info.date) {
      setErrorMsg('dateError','Date field is required'); 
    }
    if (!info.class_name) {
      setErrorMsg('class_nameError','Class Name field is required'); 
    }
  } 
}
const handleDelete = ()=>{

}
  return (
    <>
      <div className='booking-pannel'>
          <div className='card form-margin'>
            <Grid container spacing={2}> 
              <Grid item xs={2}>
                <FormControl fullWidth>
                    <InputLabel id="form-label">Form</InputLabel> 
                    <Select className='form-width' name='form_location' labelId="form-label" id="form-input" value={info.form_location} label="Form" onChange={handleChange}  >
                      {
                        airport.map((value,key)=>
                          <MenuItem key={key} value={key+1}>{value}</MenuItem> 
                        )
                      }
                    </Select>
                    {
                      errors.form_locationError &&
                     (<span className='input-error'>{errors.form_locationError}</span>)
                    }  
                </FormControl>
              </Grid>   
              <Grid item xs={2}>
                <FormControl fullWidth>
                      <InputLabel id="to-label">To</InputLabel> 
                      <Select className='to-width' name='to_location'  labelId="to-label" id="to-input" value={info.to_location} label="to" onChange={handleChange}>
                        <MenuItem value={0}> Please Select </MenuItem>
                        {
                        airport.map((value,key)=>
                          <MenuItem key={key} value={key+1}>{value}</MenuItem> 
                        )
                        }
                      </Select>
                      {
                        errors.to_locationError &&
                        (<span className='input-error'>{errors.to_locationError}</span>)
                      } 
                </FormControl>
              </Grid>  
              <Grid item xs={2}>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateField']}>
                    <DateField label="Basic date field" />
                  </DemoContainer>
                </LocalizationProvider> */}
                <TextField type='date' name='date'  value={info.date} onChange={handleChange} ></TextField>
                {
                  errors.dateError &&
                  (<span className='input-error'>{errors.dateError}</span>)
                } 
              </Grid> 
              <Grid item xs={2}>
                <FormControl fullWidth>
                  <InputLabel id="guest-label">Guest</InputLabel> 
                  <Select className='guest-width' name='guest' labelId="guest-label" id="guest-input" value={info.guest} label="guest" onChange={handleChange} >
                    <MenuItem value={0}> Please Select </MenuItem>
                    {
                      member.map((value,key)=>(
                        <MenuItem  key={key} value={key+1}>{value}</MenuItem>
                      ))
                    } 
                  </Select>
                  {
                    errors.guestError &&
                    (<span className='input-error'>{errors.guestError}</span>)
                  }
                </FormControl>
              </Grid>  
              <Grid item xs={2}>
                <FormControl fullWidth>
                  <InputLabel id="class-label">Class Name</InputLabel> 
                  <Select className='class-width' name='class_name'  labelId="class-label" id="class-input" value={info.class_name} label="class" onChange={handleChange} >
                    <MenuItem value={0}> Please Select </MenuItem>
                    {
                      classList.map((value,key)=>(
                        <MenuItem key={key} value={key+1}>{value}</MenuItem> 
                      ))
                    }
                  </Select>
                  {
                    errors.class_nameError &&
                    (<span className='input-error'>{errors.class_nameError}</span>)
                  } 
                </FormControl>
              </Grid>  
              <Grid item xs={2} style={{marginTop:'10px'}}>
                <Button onClick={handleSubmit} variant="outlined">Confirm</Button>
              </Grid>  
            </Grid> 
          </div>
          <div className='card list-margin'> 
            <Grid container spacing={2} > 
              <Grid item xs={2}>
                <p className='list-title'>Form</p>
              </Grid>   
              <Grid item xs={2}> 
                <p className='list-title'>To</p>
              </Grid>  
              <Grid item xs={2}>
                <p className='list-title'>Date</p>
              </Grid> 
              <Grid item xs={2}>
                <p className='list-title'>Guest</p>
              </Grid>  
              <Grid item xs={2}>
                <p className='list-title'>Class</p>
              </Grid>  
              <Grid item xs={2}>
                <p className='list-title'>Action</p>
                {/* <Button onClick={handleDelete} variant="outlined">Delete</Button> */}
              </Grid>  
            </Grid>
              { booking_list &&
               booking_list.map((value,key)=>( 
                <Grid container spacing={2} key={key} id={key}> 
                  <Grid item xs={2}>
                    <p className='list-item'>{airport[value.form_location]}</p>
                  </Grid>   
                  <Grid item xs={2}> 
                    <p className='list-item'>{airport[value.to_location]}</p>
                  </Grid>  
                  <Grid item xs={2}>
                    <p className='list-item'>{value.date}</p>
                  </Grid> 
                  <Grid item xs={2}>
                    <p className='list-item'>{member[value.guest]}</p>
                  </Grid>  
                  <Grid item xs={2}>
                    <p className='list-item'>{classList[value.class_name]}</p>
                  </Grid>  
                  <Grid item xs={2} className='list-item'> 
                    <Button onClick={handleDelete} variant="outlined">Delete</Button>
                  </Grid>  
                </Grid>
               ))
              }
          </div>
      </div>
    </>
  )
}

export default BookingPannel
