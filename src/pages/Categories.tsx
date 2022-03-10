import * as React from 'react';
import Box from '@mui/material/Box';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  List,
  ListItem,
  IconButton,
  Avatar,
  ListItemText,
  ListItemAvatar,
  Button,
  Stack,
  TextField,
  Modal,
  SelectChangeEvent
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import './categories.scss';

function Categories() {
  const [type, setType] = React.useState('expenses');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 5].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
    height: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Stack maxWidth={200} className="buttons-container">
        <Button variant="contained" onClick={handleOpen}>
          Add Category
        </Button>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="expenses">Expenses</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
          <TextField
            id="outlined-basic"
            label="Category name"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" fullWidth>Save</Button>
        </Box>
      </Modal>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value="expenses">Expenses</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Demo>
        <List>
          {generate(
            <ListItem
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    sx={{ marginRight: 1 }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Single-line item" />
            </ListItem>
          )}
        </List>
      </Demo>
    </>
  );
}

export default Categories;
