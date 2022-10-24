import { api } from '../Api/api';


const user = {
  Username: 'ContractUser', Password: 'X9knh2W6c9SP2H08',
};


export const getContract = (url) => async (dispatch) => {
  const response = await api().post('trade/hs/orderscontract/contract', { order: url }, {
    headers: {
      Authorization: 'Basic ' + btoa(user.Username + ':' + user.Password),
    },

  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });

  dispatch({
    type: 'GET_CONTRACT', payload: response,
  });
};

export const getCertificate = (url) => async (dispatch) => {
  const response = await api().post('trade/hs/orderscontract/certificates/certificate', { order: url }, {
    headers: {
      Authorization: 'Basic ' + btoa(user.Username + ':' + user.Password),
    },

  })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });

  dispatch({
    type: 'GET_CERTIFICATE', payload: response,
  });
};