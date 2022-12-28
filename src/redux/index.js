import { configureStore } from '@reduxjs/toolkit';
import bestSlice from './bestSlice';
import sanginamSlice from './sanginamSlice';
export default configureStore({
  reducer: {
    best: bestSlice,
    sanginam: sanginamSlice,
  },
});
