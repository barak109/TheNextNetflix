import React from "react";
import {useState} from "react";
import AutoSuggest from "react-autosuggest";
import "./AutoComplete.modules.scss";

export default () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (value: any) => {
    return lowerCasedCompanies.filter(company =>
      company.name.includes(value.trim().toLowerCase())
    );
  };

  return (
    <div>
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={({value}) => {
          setValue(value);
          setSuggestions(getSuggestions(value) as any);
        }}
        onSuggestionSelected={(_, {suggestionValue}) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={(suggestion: any) => suggestion.name}
        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: "Type show name",
          value: value,
          onChange: (_, {newValue}) => {
            setValue(newValue);
          }
        }}
      />
    </div>
  );
};
