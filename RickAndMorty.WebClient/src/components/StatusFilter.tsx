import React from "react";
import { Dropdown } from "semantic-ui-react";

const statusOptions = [
  { key: "all", text: "All", value: "" },
  { key: "alive", text: "Alive", value: "alive" },
  { key: "dead", text: "Dead", value: "dead" },
  { key: "unknown", text: "Unknown", value: "unknown" },
];

interface StatusFilterProps {
  onChange: (value: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ onChange }) => {
  return (
    <Dropdown
      selection
      options={statusOptions}
      onChange={(e, data) => onChange(data.value as string)}
      placeholder="Filter by status"
    />
  );
};

export default StatusFilter;