import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';


const css = {
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '.5em',
        paddingLeft: 2,
    },
};

const MyUrlField = ({ record = {}, source, classes }) => {

    useEffect(()=>{
        // console.log(classes)
    });

    return (<a href={record[source]} className={classes.link}>
        {record[source]}
        <LaunchIcon className={classes.icon} />
    </a>);
}

export default withStyles(css)(MyUrlField);