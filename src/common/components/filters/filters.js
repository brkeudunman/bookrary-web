import React, { useState } from "react";
import { Checkbox, List, Slider } from "antd";
import { allGenres, dataAuthors, trCities } from "../../../temp/data";

const FilterByName = ({ handleChange, title, data }) => {
  return (
    <FilterSection title={title}>
      <Checkbox.Group onChange={handleChange} style={{ width: "100%" }}>
        <List
          className="w-full"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                padding: "2px",
              }}
            >
              <List.Item.Meta
                avatar={<Checkbox value={item.name} />}
                title={item.name}
              />
            </List.Item>
          )}
        />
      </Checkbox.Group>
    </FilterSection>
  );
};

const FilterSection = ({ children, title }) => {
  return (
    <div className=" bg-white border border-gray-200 p-1 pl-2 pt-2 rounded-md">
      <h4 className="font-medium underline mb-2">{title}</h4>
      {children}
    </div>
  );
};

const Filters = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (selectedValues) => {
    setSelectedGenres(selectedValues);
    // You can perform additional filtering logic here or pass the selected genres to another component for further processing
  };

  return (
    <div className="flex flex-col rounded-md bg-[#FFFBEB] border border-stone-200 p-2 gap-y-5 text-sm">
      <FilterSection title={"Filters"}>
        <p style={{ width: "100%" }} className="text-xs w-full">
          With our filters, you can look for what you want easily!
        </p>
      </FilterSection>
      <FilterByName
        handleChange={handleGenreChange}
        data={allGenres}
        title={"Genres"}
      />
      <FilterByName data={dataAuthors} title={"Popular Authors"} />
      <FilterByName data={trCities} title={"Cities"} />

      <FilterSection title={"Price Range"}>
        <Slider
          range={{
            draggableTrack: true,
          }}
          defaultValue={[10, 50]}
        />
      </FilterSection>
    </div>
  );
};

export default Filters;
