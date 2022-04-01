export const getContacts = state => state.users.contacts;
export const getFilter = state => state.users.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  const getFilteredContacts = contacts => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return getFilteredContacts(contacts);
};
