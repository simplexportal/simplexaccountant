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


export default () => {
    const [rows, setRows] = useState([]);

    const addHandler = (newData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const ms = new Date().getMilliseconds();
                setRows([...rows, newData]);
                resolve()
            }, 1000)
        })
    };

    const deleteHandler = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setRows(rows.filter(row => row.id != data.id));
                resolve()
            }, 1000)
        })
    };

    const updateHandler = (newData, oldData) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const idxOld = rows.indexOf(oldData);
                rows[idxOld] = newData;
                setRows([...rows]);
                resolve();
            }, 1000)
        });

    };

    return (
        <div style={{maxWidth: "100%"}}>
            <MaterialTable
                editable={
                    {
                        onRowAdd: newData => addHandler(newData),
                        onRowUpdate: (newData, oldData) => updateHandler(newData, oldData),
                        onRowDelete: oldData => deleteHandler(oldData)
                    }
                }
                columns={[
                    {title: "Id", field: "id", type: "numeric"},
                    {title: "Name", field: "name"},
                    {title: "Description", field: "description"},
                ]}
                data={rows}
                title="Transaction types"
            />
        </div>
    );
}



