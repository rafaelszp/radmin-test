import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';


const NotFound = () => (
  <Card>
    <Title title="Not Found" />
    <CardContent>
      <h1>404: OOOPS! Página não encontrada!!! 😭</h1>
    </CardContent>
  </Card>
);

export default NotFound