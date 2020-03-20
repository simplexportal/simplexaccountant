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


function removeRow(rows, id) {
    return rows.filter(row => row.id != id);
}

function createData(id, name, description) {
    return {id, name, description};
}

export default () => {
    const [rows, setRows] = useState([]);
    const [mode, setMode] = useState("LISTING");

    const addHandler = () => {
        const ms = new Date().getMilliseconds();
        setRows([...rows, createData(ms, "name_" + ms, "description for " + ms)])
    };

    const removeHandler = (id) => {
        setRows(removeRow(rows, id))
    }

    const editHandler = (id) => {
        console.log("Editing " + id)
    }

    return (
        <div>
            <IconButton onClick={addHandler}><AddIcon /></IconButton>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <caption>A basic table example with a caption</caption>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>Id.</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <IconButton aria-label="edit" onClick={() => editHandler(row.id)}><EditIcon /></IconButton>
                                    <IconButton aria-label="delete" onClick={() => removeHandler(row.id)}><DeleteIcon /></IconButton>
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

