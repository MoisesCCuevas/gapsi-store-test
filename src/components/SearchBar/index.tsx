import * as React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { placeholder = "Search...", onSearch } = props;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      variant="filled"
      color="primary"
      placeholder={placeholder}
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={{ marginBottom: 4, backgroundColor: "white" }}
    />
  );
};

export default SearchBar;
