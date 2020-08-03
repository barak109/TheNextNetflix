import React from "react";
import {useState} from "react";
import AutoSuggest from "react-autosuggest";
import "./AutoComplete.modules.scss";

interface Data {
  id: string;
  name: string;
}

interface Props {
  data: Data[];
  placeholder: string;
  onValueChange: (value: string) => void;
  onSelected: (value: string) => void;
  withFilter?: boolean;
}

export default ({data, placeholder, withFilter, onValueChange, onSelected}: Props) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = (value: string): any => {
    // always need to get it LowerCased otherwise use .toLowerCase(),
    return data.filter((s: Data) => s.name.includes(value.trim()));
  };

  return (
    <div>
      <AutoSuggest
        suggestions={withFilter ? suggestions : data}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({value}) => {
          setValue(value);
          if (withFilter) setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, {suggestionValue}) => onSelected(suggestionValue)}
        getSuggestionValue={(suggestion: any) => suggestion.name}
        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder,
          value: value,
          onChange: (_, {newValue}) => {
            onValueChange(newValue);
            setValue(newValue);
          }
        }}
      />
    </div>
  );
};
