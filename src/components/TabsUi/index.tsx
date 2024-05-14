/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

type Props = {
  listTabs: {
    tab: any;
    resultTab: any;
    name: string;
  }[];
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const TabsUi = ({ listTabs }: Props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}
        mb={2}
      >
        <Tabs value={value}>
          {listTabs?.map((Item, index) => (
            <>
              {React.cloneElement(<Item.tab />, {
                ...a11yProps(index),
                label: Item?.name,
                onClick: () => handleChange(index),
                sx: { textTransform: "capitalize" },
              })}
            </>
          ))}
        </Tabs>
      </Box>
      {listTabs?.map((Item, index) => (
        <>{React.cloneElement(<Item.resultTab />, { value: value, index })}</>
      ))}
    </Box>
  );
};
