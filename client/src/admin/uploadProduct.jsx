

import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Box,
  Paper
} from '@mui/material';
import axios from 'axios';
import BackEndUrl from '../config/BackendUrl';
import "../css/dashboard.css"


import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const UploadProduct = () => {




const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});



  const [input, setInput] = useState({});
  const [selectedImages, setSelectedImages] = useState("");
  const [category, setCategory] = useState(''); // ✅ define category state
  //  Proper input state handling restored
  const handleInput=(e)=>{
  
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
  }

    const handleCategoryChange = (e) => {
    setCategory(e.target.value); // ✅ update category on change
  };

  //  Image handling
  const handleImages=(e)=>{
      setSelectedImages(e.target.files);
      console.log(selectedImages);
  }

  // Backend post logic (your original one)
  const handleSubmit=async(e)=>{
         e.preventDefault();
        const formData= new FormData();
         for (var key in input)
         {
          formData.append(key, input[key]);
         }
         // Add category
  formData.append("category", category);
         
           for (let i = 0; i < selectedImages.length; i++) {
            formData.append('setImages', selectedImages[i]);
        }
         let api=`${BackEndUrl}/admin/productsave`;
         const response = await axios.post(api, formData);
         console.log(response);
         alert("Product Save!")
  }

  return (
    <>
<div className='main-div'>

    <Box
      component={Paper}
      elevation={12}
      sx={{
        maxWidth: 500,
        margin: 'auto',
        p: 4,
        borderRadius: 3,
        bgcolor: '#430E5A',
        boxShadow: '0 80 10px #eaeaea',
        color: '#e2e8f0',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ color: '#eaeaea', fontWeight: 'bold', textAlign: 'center' }}>
        Upload Game Product
      </Typography>

      <form >
        <TextField
          label="Product Name"
          name="name"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleInput}
          InputLabelProps={{ style: { color: '#eaeaea' } }}
          InputProps={{ style: { color: '#e2e8f0', borderColor: '#eaeaea' } }}
        />

        <TextField
          label="Product Description"
          name="description"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleInput}
          InputLabelProps={{ style: { color: '#eaeaea' } }}
          InputProps={{ style: { color: '#e2e8f0' } }}
        />

        <TextField
          label="Product Price"
          name="price"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={handleInput}
          InputLabelProps={{ style: { color: '#eaeaea' } }}
          InputProps={{ style: { color: '#e2e8f0' } }}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel sx={{ color: '#eaeaea' }}>Select Category</InputLabel>
          <Select
            name="category"
            label="Select Category"
           
              value={category}
    onChange={handleCategoryChange}

            sx={{
              color: '#e2e8f0',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: '#eaeaea'
              }
            }}
          >
            <MenuItem value="controller">Controller</MenuItem>
            <MenuItem value="dvd">DVD</MenuItem>
            <MenuItem value="console">Console</MenuItem>
            <MenuItem value="chair">Gaming chair   </MenuItem>
            <MenuItem value="cpupart">CPU Parts    </MenuItem>
            <MenuItem value="headphone">Gaming Headphones    </MenuItem>
            <MenuItem value="laptop">Gaming Laptop    </MenuItem>
            <MenuItem value="mousekeyboard">Mouse & Keyboard    </MenuItem>
        
            <MenuItem value="psp">PSP    </MenuItem>
            <MenuItem value="vrgaming">VR Games    </MenuItem>
             </Select>
        </FormControl>

        {/* <Button
          variant="outlined"
          component="label"
          sx={{
            color: '#eaeaea',
            borderColor: '#eaeaea',
            width: '100%',
            borderRadius: "20px 0px 20px 0px",
            mt: 2,
            mb: 2,
            '&:hover': {
              backgroundColor: '#000',
              color: "#22D20B",
              fontFamily: "sans-serif",
              transition: "0.3s ease-in",
              letterSpacing: "5px",
            }
          }}
        >

          Upload Images
        </Button> */}

          {/* <input multiple type="file" onChange={handleImages} /> */}



   <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload files
      <VisuallyHiddenInput
        type="file"
        onChange={handleImages}
        multiple
      />
    </Button>


        <Button
        onClick={handleSubmit}
          type="submit"
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: '#eaeaea',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: "0px 20px 0px 20px",
            '&:hover': {
              backgroundColor: '#000',
              color: "#22D20B",
              fontFamily: "sans-serif",
              transition: "0.3s ease-in",
              letterSpacing: "5px"
            }
          }}
        >
          Submit
        </Button>



      </form>
    </Box>
</div>

    </>

  );
};

export default UploadProduct;
