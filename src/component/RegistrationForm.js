

import React, { useState} from 'react'
import { Grid, Paper,  TextField, Button, Typography,Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';





const RegistrationForm = () => {
     
    const [values, setValues] = useState({
     name: "",
     email: "",
     password: "",
     city: "",

    });

    const handleChangle = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
        console.log(values);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
    }


    const paperStyle={padding :15,height:'80vh',width:200, margin:"20px auto"}
    
    const btnstyle={margin:'6px 0'}

    
    return(
        <Grid>
          <Paper elevation={8} style={paperStyle}>
        
               <h2>Registration Form</h2> 

            <TextField label='Name'
            placeholder='Enter Name'fullWidth required
            autoComplete='none'
            name="name"
            values={values.name}
            onChange={handleChangle}/>

           <TextField label='Email'
            placeholder='Enter email'fullWidth required
            autoComplete='none'
            name="email"
            values={values.email}
            onChange={handleChangle}/>

            <TextField label='Password' 
            placeholder='Enter password' type='password'
            autoComplete='none' 
            name="password" 
            values={values.password}
            onChange={handleChangle} fullWidth required/>

            <TextField label='City'
            placeholder='Enter City'fullWidth required
            autoComplete='none'
            name="city"
            values={values.city}
            onChange={handleChangle}/>
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}
                <Button type='submit'  color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleFormSubmit}>Login</Button>
                {/* <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                 */}
          </Paper>
            
        </Grid>

        
    )
}

export default RegistrationForm;




// import React from 'react'

//  const RegistrationForm = () => {
//     return (
//         <div>
//           <h3>2</h3>
//         </div>
//     )
// }

// export default RegistrationForm;