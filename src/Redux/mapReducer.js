const defaultState = {
  department: { name: 'Бухгалтерия', state: 'accounting', x: '', y: '' },
};

const SET_ACTIVE_DEPARTMENT = 'SET_ACTIVE_DEPARTMENT';

export const mapReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_DEPARTMENT:
      return { ...state, department: action.payload };
    default:
      return state;
  }
};

export const setDepartmentAction = payload => ({
  type: SET_ACTIVE_DEPARTMENT,
  payload,
});
