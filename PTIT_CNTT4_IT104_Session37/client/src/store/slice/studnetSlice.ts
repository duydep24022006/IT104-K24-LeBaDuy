import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Student, StudentState } from "../../features/students/types";

const initialState: StudentState & { loading: boolean; error: string | null } =
  {
    students: [],
    loading: false,
    error: null,
  };

export const getAllStudents = createAsyncThunk<Student[]>(
  "student/getAllStudents",
  async () => {
    try {
      const res = await axios.get<Student[]>("http://localhost:8080/students");
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
export const postStudent = createAsyncThunk(
  "student/postStudent",
  async (newStudent: Student) => {
    try {
      const res = await axios.post<Student>(
        "http://localhost:8080/students",
        newStudent
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id: string) => {
    try {
      const res = await axios.delete(`http://localhost:8080/students/${id}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
export const editStudent = createAsyncThunk(
  "student/editStudent",
  async (newStudent: Student) => {
    try {
      const res = await axios.patch(
        `http://localhost:8080/students/${newStudent.id}`,
        newStudent
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
);
const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllStudents.fulfilled, (state, action) => {
        state.students = action.payload;
        state.loading = false;
      })
      .addCase(getAllStudents.rejected, (state) => {
        state.loading = false;
        state.error = "Lỗi khi lấy student!";
      })
      .addCase(postStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.filter(
          (item) => item.id !== action.meta.arg
        );
      })
      .addCase(editStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = state.students.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      });
  },
});

export default studentSlice.reducer;
