import React from 'react'
import { ThemeProvider, makeStyles, Container, Box,} from '@material-ui/core'
import theme from '../../../temaConfig'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles ({
    box:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },
    root :{
      margin: theme.spacing(30),
      padding: theme.spacing(15),
       background : "linear-gradient(0deg, #689f38 30%,#ffcc80 90% )"
    },
    avatar :{
      fontSize: '80px',
      width: theme.spacing (25),
      height: theme.spacing (25),
    }     
})

function LoginForm() {
    const classes = useStyles ()
    return (
        <ThemeProvider theme = {theme}>
          <Container>
            <Box className = {classes.root}  borderRadius=  {20}>
              <div className = {classes.box}>
                <Avatar className = {classes.avatar} src = "//home/aatiencia/atilogistic/fronted/atilgo_fronted/src/estaticos/imagens/logoserver.svg"
                        size = {100}
                        borderRadius = {50}
                >
                </Avatar>
                <Typography component="h1" variant="h5">
                  Atilogistic
                </Typography>
                <form  noValidate>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="usuario"
                    label="Usuario"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    color="primary"
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    color="secondary"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>
                  <Box marginTop = {2}>
                  <Grid  container>
                    <Grid item xs>
                      <Link href="#" variant="body2" 
                      color ="secondary">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2" color = 'secondary'>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>

                </Box>
              </form>
            </div>
            </Box>
          </Container>
        </ThemeProvider>
    )
}

export default LoginForm
