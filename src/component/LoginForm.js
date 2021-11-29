// import React from 'react'

//  const LoginForm = () => {
//     return (
//         <div>
            

        
//         </div>
//     )
// }

// export default LoginForm;

import React, { useState} from 'react'
import { Grid, Paper,  TextField, Button, Typography,Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';





const LoginForm = () => {
     
    const [values, setValues] = useState({
     email: "",
     password: "",
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


    const paperStyle={padding :15,height:'60vh',width:200, margin:"20px auto"}
    
    const btnstyle={margin:'6px 0'}
    return(
        <Grid>
          <Paper elevation={8} style={paperStyle}>
        
               <h2>Login Form</h2> 
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
            <br></br>
                {/* <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 /> */}

                 <br></br>
                <Button type='submit'  color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleFormSubmit}>Login</Button>
                {/* <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography> */}
                
          </Paper>
            
        </Grid>

        
    )
}

export default LoginForm;