import React, { useEffect, useState } from "react";
import { Checkbox, List, Slider, Table } from "antd";

const genreData = [
  {
    title: "Action",
  },
  {
    title: "Historical",
  },
  {
    title: "Mythology",
  },
  {
    title: "Poetry",
  },
  {
    title: "Romance",
  },
];

const Filters = () => {
  return (
    <div className="flex flex-col rounded-md bg-[#FFFBEB] border border-stone-200 p-2 gap-y-5 text-sm">
      <div className=" bg-white border border-gray-200 p-1 rounded-md">
        <h4 className="font-medium underline">Filters</h4>
        <p className="text-xs">
          loremloreml oremloremlore mloremloremloremloremlore
          mloremloremloremlorem
        </p>
      </div>
      <div className=" bg-white border border-gray-200 p-1 rounded-md">
        <h4 className="font-medium underline">Genres</h4>
        <Checkbox.Group style={{ width: "100%" }}>
          <List
            itemLayout="horizontal"
            dataSource={genreData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Checkbox value={item.title} />}
                  title={item.title}
                />
              </List.Item>
            )}
          />
        </Checkbox.Group>
      </div>

      <div className=" bg-white border border-gray-200 p-1 rounded-md">
        <h4 className="font-medium underline">Authors</h4>
        <Checkbox.Group style={{ width: "100%" }}>
          <List
            itemLayout="horizontal"
            dataSource={genreData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Checkbox value={item.title} />}
                  title={item.title}
                />
              </List.Item>
            )}
          />
        </Checkbox.Group>
      </div>

      <div className=" bg-white border border-gray-200 p-1 rounded-md">
        <h4 className="font-medium underline">Cities</h4>
        <Checkbox.Group style={{ width: "100%" }}>
          <List
            itemLayout="horizontal"
            dataSource={genreData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Checkbox value={item.title} />}
                  title={item.title}
                />
              </List.Item>
            )}
          />
        </Checkbox.Group>
      </div>

      <div className=" bg-white border border-gray-200 p-1 rounded-md">
        <h4 className="font-medium underline">Price Range</h4>
        <Slider
          range={{
            draggableTrack: true,
          }}
          defaultValue={[10, 50]}
        />
      </div>
    </div>
  );
};

export default Filters;
