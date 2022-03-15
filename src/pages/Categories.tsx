import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  fetchCategories,
  selectAllCategories,
} from '../features/categories/categoriesSlice';
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
  SelectChangeEvent,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './categories.scss';

interface Category {
  id: string;
  name: string;
  type: string;
}

function Categories() {
  const [type, setType] = useState('expenses');

  const dispatch = useAppDispatch();
  const categoriesStatus = useAppSelector((state) => state.categories.status);
  const categories = useAppSelector(selectAllCategories);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const filterCategoriesByType = (type: String) => {
    return categories.filter((item: Category) => {
      return item.type === type;
    })
  }

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchCategories());
    }
  }, [categoriesStatus, dispatch]);

  useEffect(() => {
    if (categoriesStatus === 'succeeded') {
      setFilteredCategories(filterCategoriesByType(type));
    }
  }, [categoriesStatus, dispatch]);

  const selectHandleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    setFilteredCategories(filterCategoriesByType(event.target.value));
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <Box className='popup-box'>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={selectHandleChange}
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
          <Button variant="contained" fullWidth>
            Save
          </Button>
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
            onChange={selectHandleChange}
          >
            <MenuItem value="expenses">Expenses</MenuItem>
            <MenuItem value="income">Income</MenuItem>
          </Select>
        </FormControl>
      </Box>
        <List>
          {filteredCategories.map((item: Category) => {
            return (
              <ListItem
                key={item.id}
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
                <ListItemText primary={item.name} />
              </ListItem>
            );
          })}
        </List>
    </>
  );
}

export default Categories;
