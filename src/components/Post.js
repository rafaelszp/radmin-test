import React from 'react'
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


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="Usuário" source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

export const PostList = props => (
    <List filters={<PostFilter />} title="Postagens"  {...props}>
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => `${record.views} views`}
                    tertiaryText={record => moment().format('DD/MM/YYYY',record.published_at)}
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
);

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="app.label.search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

