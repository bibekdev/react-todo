import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';

function AddTodo({ addTodo }) {
  const [content, setContent] = useState('');

  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();

    if (!content) {
      toast({
        title: 'No Todo?',
        description: 'Please, pass some todos',
        status: 'error',
        duration: 9000,
        isClosable: 'true',
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          variant='filled'
          placeholder='Add your Todo'
          value={content}
          onChange={e => setContent(e.target.value)}
        />
        <Button colorScheme='pink' px='8' type='submit' _focus='false'>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
