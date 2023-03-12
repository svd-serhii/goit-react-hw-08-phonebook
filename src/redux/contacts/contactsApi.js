import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const { data: result } = await instance.post('/contacts', contact);
  return result;
};

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  return result;
};

export const patchContact = async contact => {
  const { data } = await instance.patch(`/contacts/${contact.id}`, {
    name: contact.name,
    number: contact.number,
  });
  return data;
};
