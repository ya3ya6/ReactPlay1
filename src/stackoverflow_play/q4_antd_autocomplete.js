import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import "antd/dist/antd.css";

const searchResults = async query => {
  return [
    {
      key: "hidden value = 1",
      value: "title 1",
      label: DisplayElement("title 1", "title 1", "lurem ipsum 1")
    },
    {
      key: "hidden value = 2",
      value: "title 2",
      label: DisplayElement("title 2", "title 2", "lurem ipsum 2")
    }
  ];
};

const DisplayElement = (query, Title, info) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span>
          <a>{Title}</a>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <span>{info}</span>
      </div>
    </>
  );
};

const SearchBar = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = async value => {
    setOptions(value ? await searchResults() : []);
  };

  const onSelect = (value, option) => {
    // you don't want the value, instead you want the key.
    alert(option.key);
  };
  return (
    <AutoComplete
      dropdownMatchSelectWidth={300}
      style={{ width: 350 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="Search By name" enterButton />
    </AutoComplete>
  );
};
export default SearchBar;
