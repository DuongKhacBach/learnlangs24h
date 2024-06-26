// ##################################
// #       IMPORT Npm
// ##################################
import { Input } from 'rsuite';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import React, { useState, useRef } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { Editor } from '@tinymce/tinymce-react';

// ##################################
// #       IMPORT Components
// ##################################
interface QuestionType {
    id: number;
}

// ##################################
const UpdateUnit: React.FC = () => {
    const editorRef = useRef<any>(null);

    // ##########################
    // #      STATE MANAGER     #
    // ##########################
    const [lectureType, setLectureType] = useState<string>('');
    const [exerciseType, setExerciseType] = useState<string>('');
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    const [timeValue, setTimeValue] = useState<dayjs.Dayjs | null>(dayjs('2022-04-17T15:30'));

    /* -------------------------------------------------------------------------- */
    /*                             FUNCTION MANAGEMENT                            */
    /* -------------------------------------------------------------------------- */
    const handleTimeChange = (newValue: dayjs.Dayjs | null) => {
        if (newValue) {
            setTimeValue(newValue);
        }
    };

    // Hàm thêm câu hỏi
    const addQuestion = () => {
        const newItem: QuestionType = { id: Date.now() };
        setQuestions([...questions, newItem]);
    };

    // Hàm xóa câu hỏi
    const removeQuestion = (index: number) => {
        const updatedItems = [...questions];
        updatedItems.splice(index, 1);
        setQuestions(updatedItems);
    };

    // Hàm thay đổi Loại bài học (Video hay thực hành)
    const handleChangeLectureType = (event: SelectChangeEvent) => {
        setLectureType(event.target.value as string);
    };

    // Hàm thay đổi loại câu hỏi (Điền vào chỗ chống || chọn đáp án đúng)
    const handleChangeQuestionType = (event: SelectChangeEvent) => {
        setExerciseType(event.target.value as string);
    };

    return (
        <div>
            <ul className="mt-2 flex flex-col gap-4">
                <li className="">
                    <label aria-label="Unit Name" className=" text-base font-semibold text-textCustom">
                        Unit Name
                    </label>
                    <Input size="lg" placeholder="Unit Name" className="mt-2 border-bdCustom bg-bgCustom" />
                </li>

                <li className="flex flex-wrap items-center gap-4">
                    {/* Unit time */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['TimeField']}>
                            <TimeField
                                label="Unit Time"
                                defaultValue={dayjs('2022-04-17T15:30')}
                                value={timeValue}
                                format="HH:mm:ss"
                                onChange={handleTimeChange}
                                className="border-blue-200 bg-bgCustom text-textCustom"
                            />
                        </DemoContainer>
                    </LocalizationProvider>

                    {/* Lecture Type */}
                    <FormControl style={{ width: '15rem', marginTop: '0.5rem' }}>
                        <InputLabel id="demo-simple-select-label">Lecture Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lectureType}
                            label="Lecture Type"
                            onChange={handleChangeLectureType}
                        >
                            <MenuItem value={'videoLecture'}>Video Lecture</MenuItem>
                            <MenuItem value={'exercise'}>Exercise</MenuItem>
                        </Select>
                    </FormControl>

                    {lectureType === 'exercise' && (
                        <div className="flex items-center gap-2">
                            <FormControl style={{ width: '15rem', marginTop: '0.5rem' }}>
                                <InputLabel id="demo-simple-select-label">Exercise Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={exerciseType}
                                    label="Exercise Type"
                                    onChange={handleChangeQuestionType}
                                >
                                    <MenuItem value={'fillBlank'}>Fill Blank</MenuItem>
                                    <MenuItem value={'multipleChoice'}>Multiple Choice</MenuItem>
                                </Select>
                            </FormControl>

                            {exerciseType === 'fillBlank' && (
                                <AddCircleOutlineIcon fontSize="medium" className="cursor-pointer text-textCustom" onClick={addQuestion} />
                            )}
                        </div>
                    )}
                </li>
            </ul>

            {/* Editor */}
            {lectureType === 'videoLecture' && (
                <div className="mt-4">
                    <Editor
                        apiKey={import.meta.env.VITE_TINY_API_KEY}
                        onInit={(_evt, editor) => (editorRef.current = editor)}
                        initialValue=""
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist',
                                'autolink',
                                'lists',
                                'link',
                                'image',
                                'charmap',
                                'preview',
                                'anchor',
                                'searchreplace',
                                'visualblocks',
                                'code',
                                'fullscreen',
                                'insertdatetime',
                                'media',
                                'table',
                                'code',
                                'help',
                                'wordcount',
                            ],

                            toolbar:
                                'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:QuickSand,Arial,sans-serif; font-size:14px; font-weight: 500; }',
                        }}
                    />
                </div>
            )}

            {/* Fill Blank Exercise */}
            <ul className="mt-4 flex flex-col gap-4">
                {questions.map((_item, index) => (
                    <li key={index} className="flex flex-wrap items-center gap-4">
                        <RemoveCircleOutlineIcon
                            fontSize="medium"
                            className="cursor-pointer text-textCustom"
                            onClick={() => removeQuestion(index)}
                        />
                        <div className="flex flex-wrap items-center gap-4">
                            <TextField id={`outlined-basic-${index}`} label="Question" variant="outlined" style={{ width: '20rem' }} />
                            <TextField id={`outlined-basic-${index}`} label="Answers" variant="outlined" style={{ width: '20rem' }} />
                            <TextField
                                id={`outlined-basic-${index}`}
                                label="Others Answers"
                                variant="outlined"
                                style={{ width: '20rem' }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpdateUnit;
