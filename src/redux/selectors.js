// CONTACTS
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
// AUTH
export const nameSelector = state => state.auth?.user?.name;
export const loginSelector = state => state.auth.isLogin;
export const tokenSelector = state => state.auth.token;

export const qwe = state => state.auth;
