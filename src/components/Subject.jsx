import React, { useState } from "react";
import { Stack, Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

export default function Subject() {
  const [subjects, setSubjects] = useState({ subject1: "", subject2: "", subject3: "", subject4: "", subject5: "" });
  const [records, setRecords] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const isDisabled = Object.values(subjects).some((mark) => mark.trim() === "");

  const handleChange = (e) => {
    setSubjects({ ...subjects, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const total = Object.values(subjects).reduce((acc, mark) => acc + Number(mark), 0);
    setRecords([...records, { ...subjects, total }]);
    setSubjects({ subject1: "", subject2: "", subject3: "", subject4: "", subject5: "" });
    setShowTable(true);
  };

  return (
    <Stack direction="column" spacing={2} alignItems="center">
      <Typography variant="h3" color="initial">Enter The Marks</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Subject 1" name="subject1" value={subjects.subject1} onChange={handleChange} />
        <TextField label="Subject 2" name="subject2" value={subjects.subject2} onChange={handleChange} />
        <TextField label="Subject 3" name="subject3" value={subjects.subject3} onChange={handleChange} />
        <TextField label="Subject 4" name="subject4" value={subjects.subject4} onChange={handleChange} />
        <TextField label="Subject 5" name="subject5" value={subjects.subject5} onChange={handleChange} />
      </Stack>
      <Button variant="contained" onClick={handleSubmit} disabled={isDisabled}>Calculate</Button>
      {showTable && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Subject 1</TableCell>
              <TableCell>Subject 2</TableCell>
              <TableCell>Subject 3</TableCell>
              <TableCell>Subject 4</TableCell>
              <TableCell>Subject 5</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{record.subject1}</TableCell>
                <TableCell>{record.subject2}</TableCell>
                <TableCell>{record.subject3}</TableCell>
                <TableCell>{record.subject4}</TableCell>
                <TableCell>{record.subject5}</TableCell>
                <TableCell>{record.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Stack>
  );
}
