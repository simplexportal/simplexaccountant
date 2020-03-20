import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import MaterialTable from "material-table";


function removeRow(rows, id) {
    return rows.filter(row => row.id != id);
}

function createData(id, name, description) {
    return {id, name, description};
}

export default () => {
    const [rows, setRows] = useState([]);

    const addHandler = () => {
        const ms = new Date().getMilliseconds();
        setRows([...rows, createData(ms, "name_" + ms, "description for " + ms)])
    };

    const removeHandler = (id) => {
        setRows(removeRow(rows, id))
    };

    const editHandler = (id) => {
        console.log("Editing " + id)
    };

    return (
        <div style={{maxWidth: "100%"}}>
            <MaterialTable
                actions={
                    [
                        {
                            icon: 'add',
                            tooltip: 'Add User',
                            isFreeAction: true,
                            onClick: (event) => addHandler()
                        },
                        {
                            icon: "edit",
                            tooltip: "Edit transaction type",
                            onClick: (event, rowData) => editHandler(rowData.id)
                        },
                        {
                            icon: "delete",
                            tooltip: "Delete transaction type",
                            onClick: (event, rowData) => removeHandler(rowData.id)
                        },
                    ]
                }
                columns={[
                    {title: "Id", field: "id", type: "numeric"},
                    {title: "Name", field: "name"},
                    {title: "Description", field: "description"},
                ]}
                data={ rows }
                title="Transaction types"
            />
        </div>
    );
}



