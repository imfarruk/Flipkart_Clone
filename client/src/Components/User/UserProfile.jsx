import React from 'react';
import {Grid,Box ,Button,TextField} from '@mui/material';

const UserProfile=()=>{
return(
<>
<Box>
<Grid container spacing={2} style={{marginTop:20,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
  <Grid item  xs={10} md={4} lg={10} sm={8} >
    <TextField id="outlined-basic" label="FirstName" variant="outlined" />
    <TextField id="outlined-basic" label="Name" variant="outlined" />
   
  </Grid>
  <Grid item xs={10} md={10} lg={4} sm={8}>
  <TextField id="outlined-basic" label="Password" variant="outlined" />
  </Grid>
  <Grid item xs={10} md={10} lg={4} sm={8}>
  <TextField id="outlined-basic" label="Email" variant="outlined" />
  </Grid>
  </Grid>
  </Box>
  </>
) ;
}
export default UserProfile;