export const uploadClientsAction = (clientsData, opened) => ({
    type: 'UPLOAD_CLIENTS',
    opened: opened,
    payload: clientsData
});

export const searchAction = (string) => ({
    type: 'SEARCH',
    payload: string
});

export const uploadClients = () => dispatch => {
    fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((clients) => {dispatch(uploadClientsAction(clients.results));})
};


