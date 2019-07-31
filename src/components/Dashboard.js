import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { translate,Title} from 'react-admin';





import { useStoreDispatch } from 'easy-peasy'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  errorButton: {
    color: "#fff",
    backgroundColor: theme.palette.error.main,
    '&:hover': {
        backgroundColor: fade(theme.palette.error.main, 0.6),
        // Reset on mouse devices
        '@media (hover: none)': {
            backgroundColor: 'transparent',
        },
    },
  },
});

const infoDispatch = {
  type: 'RA/SHOW_NOTIFICATION',
  payload: {
    messageArgs: {
      smart_count: 13
    },
    undoable: false,
    type: 'info',
    message: 'app.message.nuts'
  }
}
const errorDispatch = {
  type: 'RA/SHOW_NOTIFICATION',
  payload: {
    messageArgs: {
      smart_count: 13
    },
    undoable: false,
    type: 'warning',
    message: 'app.message.error'
  }
}

const Dashboard = ({classes,translate}) => {
  const dispatch = useStoreDispatch();

  return (
    <Card>
      <Title title="Welcome to the administration" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
      <Button variant="contained"
        color="secondary"
        aria-label="Show message"
        onClick={() => dispatch({ ...infoDispatch })}>
        <InfoIcon />
        {translate('app.label.nutsInfoMessage')}
      </Button>
      <Button 
        variant="contained" 
        aria-label="Show message"
        className={classes.errorButton}
        onClick={() => dispatch({ ...errorDispatch })}>
        <InfoIcon />
        {translate('app.label.nutsErrorMessage')}
      </Button>
    </Card>
  )
};

export default translate(withStyles(styles)(Dashboard))