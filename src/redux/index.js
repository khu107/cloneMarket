import { configureStore } from '@reduxjs/toolkit';
import bestSlice from './bestSlice';
export default configureStore({
  reducer: {
    best: bestSlice,
  },
});
