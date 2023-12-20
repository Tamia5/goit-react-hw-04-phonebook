import { Container, List, Item, Name, Btn } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Container>
            <Name>{name}:</Name>
            <p>{number}</p>
          </Container>
          <Btn onClick={() => onDelete(id)}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
