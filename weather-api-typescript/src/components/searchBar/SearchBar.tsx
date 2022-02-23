import { Autocomplete } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import "./searchBar.css";
import IconButton from "@mui/material/IconButton";

import SearchIcon from "@mui/icons-material/Search";

import {
  fetchWeatherByName,
  fetchWeatherByZipcode,
} from "../../store/slices/weatherDataslice";
import { useAppDispatch } from "../../store/hooks";



const TOP_CITIES = ["Islamabad", "Lahore", "Multan"];
const FILTERS = ["CityName", "City ID", "Zip Code"];
const SearchBar = () => {
  const [query, setQuery] = React.useState<string | null>(TOP_CITIES[0]); //handling input query
  const [filterType, setFilterType] = React.useState<string | null>(FILTERS[0]); //handling filter type e.g., zipcode

  const dispatch = useAppDispatch();

  //handling filter and calling method according to filterType
  const handlingFilter = () => {
    switch(filterType) {
      case "CityName":
        dispatch(fetchWeatherByName(query));
        // code block
        break ;
      case "City ID":
        dispatch(fetchWeatherByZipcode(query));
        // code block
        break;
      default:
        dispatch(fetchWeatherByZipcode(query));

        // code block
    }
    
  };

  return (
    <div className="searchBar">
      {/*this is for selecting filter type */}
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        freeSolo
        options={FILTERS}
        onChange={(event: any, newValue: string | null) => {
          setFilterType(newValue);
        }}
        sx={{ width: "20%" }}
        renderInput={(params) => <TextField {...params} label={filterType} />}
      />

      {/*end************ */}

      {/*this is for getting input query */}

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={TOP_CITIES}
        freeSolo
        onChange={(event: any, newValue: string | null) => {
          setQuery(newValue);
        }}
        sx={{
          width: "60%",
        }}
        onInputChange={(event, newInputValue) => {
          setQuery(newInputValue);
        }}
        renderInput={(params) => <TextField {...params} label={query} />}
      />

      {/*end************ */}

      {/*this is search icon */}
      <div className="searchIcon" onClick={handlingFilter}>
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SearchBar;
