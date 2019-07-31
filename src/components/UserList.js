import React from 'react';
import {Datagrid,TextField,List,EmailField} from 'react-admin'
import MyUrlField from './MyUrlField'

export const UserList = props => (
    <List {...props} title="Lista de usuários">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export default UserList;