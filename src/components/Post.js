import React, { useState, Fragment } from 'react'
import {
    SimpleForm,
    Edit,
    TextInput,
    ReferenceInput,
    SelectInput,
    DisabledInput,
    LongTextInput,
    Datagrid,
    Create,
    ReferenceField,
    TextField,
    List,
    Filter,
    SimpleList,
    Responsive,
    translate,
} from 'react-admin'

import {
    required,
    minLength,
    maxLength,
    minValue,
    maxValue,
    number,
    regex,
    email,
    choices
} from 'react-admin'



import moment from 'moment'
import 'moment/locale/pt-br';


import RichTextInput from 'ra-input-rich-text';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <RichTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = translate(({translate,...props}) => {

    const validateTitle = [required(), minLength(3), maxLength(15)];
    const validateBody = [required(), minLength(30), maxLength(100)];
    const validateUser = [
        number(translate('ra.validation.selectFieldError', { name: translate('ra.auth.username') })),
        required(),
        minValue(1, translate('ra.validation.selectFieldError', { name: translate('ra.auth.username') }))
    ]

    const initialPost = {
        title: '',
        body: '',
        userId: 0
    }

    return (
        <Fragment>
            <Create {...props}>
                <SimpleForm defaultValue={initialPost}>
                    <ReferenceInput label="Usuário" source="userId" reference="users" validate={validateUser}>
                        <SelectInput optionText="name" />
                    </ReferenceInput>
                    <TextInput source="title" validate={validateTitle} />
                    <LongTextInput source="body" validate={validateBody} />
                </SimpleForm>
            </Create>
        </Fragment>

    );
})

export const PostList = translate(({translate,...props}) => {
    return (
        <List filters={<PostFilter />} title={translate('app.label.post')}  {...props}>
            <Responsive
                small={
                    <SimpleList
                        primaryText={record => record.title}
                        secondaryText={record => `${record.views} views`}
                        tertiaryText={record => moment().format('DD/MM/YYYY', record.published_at)}
                    />
                }
                medium={
                    <Datagrid rowClick="edit">
                        <ReferenceField source="userId" reference="users">
                            <TextField source="id" />
                        </ReferenceField>
                        <TextField source="id" />
                        <TextField source="title" />
                        <TextField source="body" />
                    </Datagrid>

                }
            />
        </List>
    )
});

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="app.label.search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);