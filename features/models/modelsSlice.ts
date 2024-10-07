import { createSlice } from '@reduxjs/toolkit'
import { ModelsInterface } from '../../interfaces/models.interface';


const modelsData: ModelsInterface = {
    status: '',
    result: {
        models: [],
        page: 1,
        per_page: 1,
        sort_by: 'popularity',
    }
};

export const modelsSlice = createSlice({
  name: 'models',
  initialState: {
    models: modelsData,
  },
  reducers: {
    setModels: (state, action) => {
        state.models = action.payload
    },
  },
});

export const { setModels } = modelsSlice.actions;

export default modelsSlice.reducer;
