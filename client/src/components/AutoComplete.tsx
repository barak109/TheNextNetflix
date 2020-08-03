import React from "react";
import {useState} from "react";
import AutoSuggest from "react-autosuggest";
import "./AutoComplete.modules.scss";
import {Data} from "../types/autoComplete";

interface Props {
  data: Data[];
  placeholder: string;
  onValueChange: (value: string, method: string) => void;
  onSelected: (value: string) => void;
}

export default ({data, placeholder, onValueChange, onSelected}: Props) => {
  const [value, setValue] = useState("");

  return (
    <div>
      <AutoSuggest
        suggestions={data}
        onSuggestionsClearRequested={() => {}}
        onSuggestionsFetchRequested={({value}) => {
          setValue(value);
        }}
        onSuggestionSelected={(_, {suggestionValue}) => {
          onSelected(suggestionValue);
        }}
        getSuggestionValue={(suggestion: Data) => suggestion.name}
        renderSuggestion={suggestion => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder,
          value: value,
          onChange: (e, {newValue, method}) => {
            if (method !== "up" && method !== "down") {
              onValueChange(newValue, method);
              setValue(newValue);
            }
          }
        }}
      />
    </div>
  );
};
