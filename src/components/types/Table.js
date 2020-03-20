import React, {useState} from 'react';
import MaterialTable from "material-table";

export default () => {
    const [rows, setRows] = useState([]);

    const addHandler = (newData) => {
        return new Promise((resolve, reject) => {
            setRows([...rows, newData]);
            resolve()
        })
    };

    const deleteHandler = (data) => {
        return new Promise((resolve, reject) => {
            setRows(rows.filter(row => row.id !== data.id));
            resolve();
        })
    };

    const updateHandler = (newData, oldData) => {
        return new Promise((resolve, reject) => {
            const idxOld = rows.indexOf(oldData);
            rows[idxOld] = newData;
            setRows([...rows]);
            resolve();
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
                    {title: "Id", field: "id", type: "numeric", editable: 'onAdd'},
                    {title: "Name", field: "name"},
                    {title: "Description", field: "description"},
                ]}
                data={rows}
                title="Transaction types"
            />
        </div>
    );
}
