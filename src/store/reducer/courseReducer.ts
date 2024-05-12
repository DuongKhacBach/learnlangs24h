// ##########################
// #      IMPORT NPM        #
// ##########################
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// ##########################
// #    IMPORT Components   #
// ##########################
import { toastSuccess, toastError } from '@components/Toast/Toasts';
import {
    DeleteUnitLessonAndVideoLectureContentPayloadType,
    MessageResponse,
    NewCoursePayloadType,
    NewCourseStateType,
    NewLessonPayloadType,
    NewUnitLessonAndFillBlankExercisePayloadType,
    NewUnitLessonAndVideoLectureContentPayloadType,
    NewUserProcessStatusPayloadType,
    UpdateUnitLessonAndFillBlankExercisePayloadType,
    UpdateUnitLessonAndVideoLectureContentPayloadType,
} from 'types/api-types';

const initialState: NewCourseStateType = {
    loading: false,
    error: null,
    data: null,
};

// ##################################
// #      CREATE ASYNC THUNK        #
// ##################################
// Create async thunk for creating a new course
export const createNewCourse = createAsyncThunk('course/createNewCourse', async (payload: NewCoursePayloadType, thunkAPI) => {
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        const response = await axios.post<MessageResponse>('/api/v1/new-course', payload, config);
        return response.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Create async thunk for creating a new lesson
export const createNewLesson = createAsyncThunk('course/createNewLesson', async (payload: NewLessonPayloadType, thunkAPI) => {
    try {
        const response = await axios.post<MessageResponse>('/api/v1/new-lesson', payload);
        return response.data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// Create async thunk for creating a new unitLesson and videoLectureContent
export const createNewUnitLessonAndVideoLectureContent = createAsyncThunk(
    'course/createNewUnitLessonAndVideoLectureContent',
    async (payload: NewUnitLessonAndVideoLectureContentPayloadType, thunkAPI) => {
        try {
            const response = await axios.post<MessageResponse>('/api/v1/newUnitLessonAndVideoLectureContent', payload);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Create async thunk for creating a new unitLesson and fillBlankExercise
export const createNewUnitLessonAndFillBlankExercise = createAsyncThunk(
    'course/createNewUnitLessonAndFillBlankExercise',
    async (payload: NewUnitLessonAndFillBlankExercisePayloadType, thunkAPI) => {
        try {
            const response = await axios.post<MessageResponse>('/api/v1/newUnitLessonAndFillBlankExercise', payload);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Create async thunk for creating a new user process status
export const createNewUserProcessStatus = createAsyncThunk(
    'course/createNewUserProcessStatus',
    async (payload: NewUserProcessStatusPayloadType, thunkAPI) => {
        try {
            const response = await axios.post<MessageResponse>('/api/v1/newUserProcessStatus', payload);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// ##################################
// #      UPDATE ASYNC THUNK        #
// ##################################

// Update async thunk for updating a UnitLessonAndVideoLectureContent
export const updateUnitLessonAndVideoLectureContent = createAsyncThunk(
    'course/updateUnitLessonAndVideoLectureContent',
    async (payload: UpdateUnitLessonAndVideoLectureContentPayloadType, thunkAPI) => {
        try {
            const response = await axios.put<MessageResponse>('/api/v1/updateUnitLessonAndVideoLectureContent', payload);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Update async thunk for updating a UnitLessonAndFillBlankExercise
export const updateUnitLessonAndFillBlankExercise = createAsyncThunk(
    'course/updateUnitLessonAndFillBlankExercise',
    async (payload: UpdateUnitLessonAndFillBlankExercisePayloadType, thunkAPI) => {
        try {
            const response = await axios.put<MessageResponse>('/api/v1/updateUnitLessonAndFillBlankExercise', payload);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// Update async thunk for updating a user process status
export const updateUserProcessStatus = createAsyncThunk(
    'course/updateUserProcessStatus',
    async (payload: NewUserProcessStatusPayloadType, thunkAPI) => {
        try {
            const response = await axios.put<MessageResponse>('/api/v1/updateUserProcessStatus', payload);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// ##################################
// #      DELETE ASYNC THUNK        #
// ##################################
export const deleteUnitLessonAndVideoLectureContent = createAsyncThunk(
    'course/deleteUnitLessonAndVideoLectureContent',
    async (payload: DeleteUnitLessonAndVideoLectureContentPayloadType, thunkAPI) => {
        try {
            const response = await axios.delete<MessageResponse>(`/api/v1/deleteUnitLessonAndVideoLectureContent?unitId=${payload}`);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

/* -------------------------------------------------------------------------- */
/*                                CREATE SLICE                                */
/* -------------------------------------------------------------------------- */
// Create new course slice
export const newCourseSlice = createSlice({
    name: 'newCourse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // ##############################
            // #     CREATE NEW COURSE      #
            // ##############################
            .addCase(createNewCourse.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewCourse.fulfilled, (state, action: PayloadAction<MessageResponse>) => {
                state.loading = false;
                state.data = action.payload;
                toastSuccess('Tạo thành công!');
            })
            .addCase(createNewCourse.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
        // ##############################
    },
});

// Create new lesson slice
export const newLessonSlice = createSlice({
    name: 'newLesson',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNewLesson.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewLesson.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                toastSuccess('Tạo thành công!');
            })
            .addCase(createNewLesson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

// Create new unitLesson and VideoLectureContent slice
export const newUnitLessonAndVideoLectureContentSlice = createSlice({
    name: 'newUnitLessonAndVideoLectureContent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNewUnitLessonAndVideoLectureContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewUnitLessonAndVideoLectureContent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                toastSuccess('Tạo thành công!');
            })
            .addCase(createNewUnitLessonAndVideoLectureContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

// Create new unitLesson and VideoLectureContent slice
export const newUnitLessonAndFillBlankExerciseSlice = createSlice({
    name: 'newUnitLessonAndFillBlankExercise',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNewUnitLessonAndFillBlankExercise.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewUnitLessonAndFillBlankExercise.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                toastSuccess('Tạo thành công!');
            })
            .addCase(createNewUnitLessonAndFillBlankExercise.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

// Create new User Process Status slice
export const newUserProcessStatusSlice = createSlice({
    name: 'newUserProcessStatus',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNewUserProcessStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewUserProcessStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(createNewUserProcessStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

/* -------------------------------------------------------------------------- */
/*                                UPDATE SLICE                                */
/* -------------------------------------------------------------------------- */

// Update UnitLessonAndVideoLectureContent
export const updateUnitLessonAndVideoLectureContentSlice = createSlice({
    name: 'updateUnitLessonAndVideoLectureContent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateUnitLessonAndVideoLectureContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUnitLessonAndVideoLectureContent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                toastSuccess('Cập nhật thành công!');
            })
            .addCase(updateUnitLessonAndVideoLectureContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

// Update UnitLessonAndFillBlankExercise
export const updateUnitLessonAndFillBlankExerciseSlice = createSlice({
    name: 'updateUnitLessonAndFillBlankExercise',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateUnitLessonAndFillBlankExercise.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUnitLessonAndFillBlankExercise.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                toastSuccess('Cập nhật thành công!');
            })
            .addCase(updateUnitLessonAndFillBlankExercise.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

// Update UserProcessStatusSlice
export const updateUserProcessStatusSlice = createSlice({
    name: 'updateUserProcessStatus',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateUserProcessStatus.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserProcessStatus.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(updateUserProcessStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

/* -------------------------------------------------------------------------- */
/*                                DELETE SLICE                                */
/* -------------------------------------------------------------------------- */

export const deleteUnitLessonAndVideoLectureContentSlice = createSlice({
    name: 'deleteUnitLessonAndVideoLectureContent',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(deleteUnitLessonAndVideoLectureContent.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteUnitLessonAndVideoLectureContent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                toastSuccess('Xóa thành công!');
            })
            .addCase(deleteUnitLessonAndVideoLectureContent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.toString() : 'Unknown error';
                toastError('Có lỗi xảy ra. Vui lòng thử lại!');
            });
    },
});

// Export the course reducer
export const newCourseReducer = newCourseSlice.reducer;
export const newLessonReducer = newLessonSlice.reducer;
export const newUnitLessonAndVideoLectureContentReducer = newUnitLessonAndVideoLectureContentSlice.reducer;
export const newUnitLessonAndFillBlankExerciseReducer = newUnitLessonAndFillBlankExerciseSlice.reducer;
export const newUserProcessStatusReducer = newUserProcessStatusSlice.reducer;

export const updateUnitLessonAndVideoLectureContentReducer = updateUnitLessonAndVideoLectureContentSlice.reducer;
export const updateUnitLessonAndFillBlankExerciseReducer = updateUnitLessonAndFillBlankExerciseSlice.reducer;
export const updateUserProcessStatusReducer = updateUserProcessStatusSlice.reducer;

export const deleteUnitLessonAndVideoLectureContentReducer = deleteUnitLessonAndVideoLectureContentSlice.reducer;
