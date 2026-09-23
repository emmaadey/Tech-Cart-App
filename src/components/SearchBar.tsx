import { TextInput } from "@mantine/core";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <TextInput
      placeholder="Search for gadgets..."
      leftSection={<FaSearch size={19} />}
      size="md"
      radius="xl"
      className="w-full"
      styles={{
        input: {
          borderColor: "#E5D5D9",
        },
      }}
    />
  );
};

export default SearchBar;
