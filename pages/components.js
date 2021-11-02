import Head from 'next/head'
import Link from 'next/link'
import React from 'react';
import { Button,Box } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    width: 200,
    flexGrow: 1,
    '& > *': {
        margin: theme.spacing(1),
      }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function RadioButtons () {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  
  const handleChange = (event, newValue) => {
    setValue(event.target.value);
    setValue(newValue);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    
  <div>
    <head>
      <title>Components</title>
    </head>
    <main>
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link href="/"><a>Home</a></Link> | 
            <Link href="/about"><a>about</a></Link> | 
            <Link href="/service"><a>service</a></Link> | 
            <Link href="/products/P001"><a>products</a></Link> | 
            <Link href="/components"><a>components</a></Link> |
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1><center>Components</center></h1>
      <br/>
      <center>
      <Button variant="contained" color="primary">Hello World</Button><br/>
      <Box component="span" m={15}>
      <Button variant="contained" color="secondary">BoxBox</Button>
      </Box>
      <br/>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      </ButtonGroup>
      <br/>
      <Checkbox
        defaultChecked
        color="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        ใช่ๆๆๆ  
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      ไม่ๆๆๆ
      <br/>
      <form className={classes.container} noValidate>
          
  <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
      </form>
      <br/>
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="ชื่อ" />
      <TextField id="standard-basic" label="นามสกุล" />
    </form>
    <br/>
    <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      ใช่
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      ไม่
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
          <Typography id="continuous-slider" gutterBottom>
        เสียง
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
          </Paper>
        </Grid>
      </Grid>
      <br/>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      </center>
    </main>
  </div>
  )
}
