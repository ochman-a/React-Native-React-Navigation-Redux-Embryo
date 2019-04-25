export const UPDATE_USER = 'UPDATE_USER';

const initialState = { user: "null" };

export default function reducer (state = initialState, action)
{
  switch (action.type) 
  {
    case 'UPDATE_USER': 
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export function updateUser(user)
{
  return {
    type: UPDATE_USER,
    payload: user
  };
}