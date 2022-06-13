import { useState } from 'react';

import { Parents, 
  Title, 
  Box,
  AddBox,
  ListBox, 
  FlexRow,
  Flex5,
  Flex1
} from './styles';

import ToDoItem from './components/ToDoItem';
import Button from './components/button';

function App() {
  const [text, setText] = useState('');
  const [listThingsToDo, setListThingsToDo] = useState([]);

  const handleClickButton = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    } else {
      const length = listThingsToDo.length;
      setListThingsToDo(
        [ 
          ...listThingsToDo, 
          {
            id: length === 0 ? 1 : listThingsToDo[length - 1].id + 1, 
            text, 
            createdDate: new Date(), 
            status: false}
        ]
      )
      setText('');
    }
  }

  const handleDeleteItem = (id) => {
    setListThingsToDo(listThingsToDo.filter(item => item.id !== id));
  }

  const handleDoneItem = (id) => {
    setListThingsToDo(listThingsToDo.map(item => {
      if (item.id === id) {
        item.status = item.status ? false : true;
      }
      return item;
    }))
  }

  return (
    <>
      <Parents>
        <Box>
          <div><Title>Things to do</Title></div>
          <AddBox>
            <form onSubmit={handleClickButton}>
              <FlexRow>
                  <Flex5>
                    <input type="text" value={text} onChange={(event) => setText(event.target.value)}/>
                  </Flex5>
                  <Flex1>
                    <Button text='Add' action={handleClickButton}></Button>
                  </Flex1>
              </FlexRow>
            </form>
          </AddBox>
          {listThingsToDo.length > 0 && <hr />}
          <ListBox>
            {listThingsToDo && listThingsToDo.map(item => {
              return (
                <ToDoItem 
                  key={item.id}
                  item={item} 
                  deleteItem={() => handleDeleteItem(item.id)} 
                  doneItem={() => handleDoneItem(item.id)}
                />
              )
            })}
          </ListBox>
        </Box>
      </Parents>
    </>
  );
}

export default App;
