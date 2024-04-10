import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, IconButton, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box maxWidth="500px" margin="auto" mt={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        Todo App
      </Heading>
      <Flex mb={8}>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo" mr={4} />
        <Button onClick={handleAddTodo} colorScheme="blue" leftIcon={<FaPlus />}>
          Add
        </Button>
      </Flex>
      {todos.length === 0 ? (
        <Text textAlign="center">No todos yet. Add one above!</Text>
      ) : (
        <List spacing={4}>
          {todos.map((todo, index) => (
            <ListItem key={index}>
              <Flex align="center">
                <Text>{todo}</Text>
                <Spacer />
                <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" size="sm" />
              </Flex>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Index;
