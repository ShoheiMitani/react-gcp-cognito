import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

const UserList = (props: any) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

export default UserList;