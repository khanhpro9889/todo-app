import React from 'react'
import { Item, Left, Right, FlexRow, Time, Text } from './styles';
import Button from '../button';
import { parseDate } from '../../utils/date'

export default function ToDoItem({item, deleteItem, doneItem}) {
  return (
    <Item>
        <FlexRow>
            <Left>
                <Text status={item.status}>{item.text}</Text>
                <Time>
                    {parseDate(item.createdDate)}
                </Time>
            </Left>
            <Right>
                <Button action={() => deleteItem()} text='Delete'/>
                <Button action={() => doneItem()} text={item.status ? 'Undone' : 'Done'}/>
            </Right>
        </FlexRow>
    </Item>
  )
}
