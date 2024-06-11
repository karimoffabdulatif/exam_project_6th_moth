import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { nanoid } from "nanoid";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AddModal({ setTasks }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: nanoid(),
      name: e.target.name.value,
      status: e.target.status.value,
    };
    setTasks((prevTasks) => [...prevTasks, task]);
    handleClose();
  };

  

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{ width: "100%", marginTop: "20px", marginBottom: "20px", backgroundColor:"#0288d1"}}
      >
        Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        component={"form"}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter task name"
            variant="outlined"
            name="name"
            fullWidth
            sx={{ marginTop: "10px", marginBottom: "20px" }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Title</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              name="status"
            >
              <MenuItem value="open">Open</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            type="submit"
            fullWidth
            sx={{ marginTop: "20px" }}
          >
            Add
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
