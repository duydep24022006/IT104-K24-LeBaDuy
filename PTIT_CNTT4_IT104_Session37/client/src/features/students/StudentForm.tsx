import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import type { Student } from "./types";

interface Props {
  open: boolean;
  initial?: Partial<Student>;
  onClose: () => void;
  onSubmit: (data: {
    id?: string;
    name: string;
    age: number;
    grade: string;
  }) => void;
}

const StudentForm: React.FC<Props> = ({
  open,
  initial = {},
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState(initial.name ?? "");
  const [age, setAge] = useState(initial.age ?? 16);
  const [grade, setGrade] = useState(initial.grade ?? "");
  const [error, setError] = useState<{
    name?: string;
    age?: string;
    grade?: string;
  }>({
    name: "",
    age: "",
    grade: "",
  });

  useEffect(() => {
    setName(initial.name ?? "");
    setAge(initial.age ?? 16);
    setGrade(initial.grade ?? "");
  }, [initial, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError((prev) => ({
        ...prev,
        name: "Name ko đc bỏ trống",
      }));
    }
    if (age <= 0 || !age) {
      setError((prev) => ({
        ...prev,
        age: "Age phải lớn hơn 0",
      }));
    }
    if (!grade.trim()) {
      setError((prev) => ({
        ...prev,
        grade: "Grade không đc bỏ trống",
      }));
    }
    if (!name.trim() || age <= 0 || !age || !grade.trim()) return;
    onSubmit({
      name: name.trim(),
      age: Number(age),
      grade: grade.trim(),
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{initial.id ? "Edit Student" : "Add Student"}</DialogTitle>
        <DialogContent className="flex flex-col gap-[15px] space-y-4 !pt-2">
          <TextField
            label={error.name ? error.name : "Name"}
            error={error.name}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError({ name: "" });
            }}
            fullWidth
            autoFocus
          />
          <TextField
            label={error.age ? error.age : "Age"}
            error={error.age}
            type="number"
            value={age}
            onChange={(e) => {
              setAge(Number(e.target.value));
              setError({ age: "" });
            }}
            fullWidth
            inputProps={{ min: 1 }}
          />
          <TextField
            label={error.grade ? error.grade : "Grade"}
            error={error.grade}
            value={grade}
            onChange={(e) => {
              setGrade(e.target.value);
              setError({ grade: "" });
            }}
            fullWidth
            placeholder="e.g. 10A1"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            {initial.id ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default StudentForm;
