export type MessageResponse = {
    success: boolean;
    message: string;
};

export interface APIResponse {
    success: boolean;
    message?: string;
    user: UserDetailsType;
}

export interface UserDetailsPopulateResponseType {
    success: boolean;
    message?: string;
    user: User;
}

export interface User {
    photo: {
        public_id: string;
        url: string;
    };
    _id: string;
    username: string;
    email: string;
    roles: string;
    createdAt: Date;
    __v: number;
    nickname: string;
    level: number;
    followers: Follow[];
    following: Follow[];
    friends: string[];
}

export interface Follow {
    photo: {
        public_id: string;
        url: string;
    };
    _id: string;
    username: string;
    email: string;
    roles: string;
    createdAt: Date;
    __v: number;
    nickname: string;
    level: number;
    followers: string[];
    following: string[];
    friends: string[];
}

export interface UserDetailsType {
    _id: string;
    nickname: string;
    username: string;
    email: string;
    photo: {
        public_id: string;
        url: string;
    };
    roles?: string;
    createdAt: Date;
    followers: string[];
    following: string[];
    friends: string[];
    level: number;
}

export interface LoginUserType {
    email: string;
    password: string;
}

export interface RegisterUserType {
    _id?: string;
    username: string;
    email: string;
    password: string;
    photo: {
        public_id: string;
        url: string;
    };
    roles?: string;
}

export interface LoginGoogleType {
    username: string | null;
    email: string | null;
    photo: {
        public_id: string | null;
        url: string | null;
    };
    googleId: string | null;
    roles?: string;
}

export interface NewCoursePayloadType {
    unitName: string;
    courseImage: File;
}

export interface NewLessonPayloadType {
    name: string;
    courseId: string;
}

export interface NewUnitLessonAndVideoLectureContentPayloadType {
    title: string;
    time: string;
    icon: string;
    lectureType: string;
    lesson: string;
    course: string;
    videoUrl: string;
    description: string;
    totalTime: string;
}

export interface NewUnitLessonAndFillBlankExercisePayloadType {
    title: string;
    time: string;
    icon: string;
    lectureType: string;
    lesson: string;
    course: string;
    questions: QuestionType[];
}

export interface NewUserProcessStatusPayloadType {
    userId: string;
    unitLessonId: string;
}

export interface UpdateLessonPayloadType {
    lessonId: string;
    lessonName: string;
}

export interface NewCourseStateType {
    loading: boolean;
    error: string | null;
    data: MessageResponse | null;
}

export interface AllCoursesResponseType {
    success: boolean;
    courses: CourseType[];
}

export interface LessonType {
    _id: string;
    name: string;
    createAt: Date;
    course: string;
}

export interface AllLessonsResponseType {
    success: boolean;
    lessons: LessonType[];
}

export interface UnitLessonType {
    _id: string;
    title: string;
    time: string;
    icon: string;
    lectureType: string;
    createAt: Date;
    lesson: string;
    course: string;
}

export interface AllUnitLessonsResponseType {
    success: boolean;
    unitLessons: UnitLessonType[];
}

export interface UnitLessonResponseType {
    success: boolean;
    unitLesson: UnitLessonType;
}

export interface VideoLectureContentResponseType {
    success: true;
    videoLectureContent: {
        _id: string;
        videoUrl: string;
        totalTime: string;
        description: string;
        unitLesson: string;
    };
}

export interface FillBlankExerciseResponseType {
    success: boolean;
    fillBlankExercise: FillBlankExercise;
}

export interface FillBlankExercise {
    _id: string;
    unitLesson: string;
    questions: QuestionType[];
}

export interface QuestionType {
    sentence: string;
    correctAnswer: string[];
    otherAnswer: string[];
    _id?: string;
}

export interface CourseType {
    _id: string;
    name: string;
    image: {
        url: string;
    };
    createAt: Date;
    rating: number;
}

export interface UserProcessStatusResponse {
    success: boolean;
    unitLessonStatus: UnitLessonStatus[];
}

export interface UnitLessonStatus {
    _id: string;
    userId: string;
    unitLessonId: UnitLessonID;
    status: string;
}

export interface UnitLessonID {
    _id: string;
    title: string;
    time: string;
    icon: string;
    lectureType: string;
    createAt: Date;
    lesson: string;
    course: string;
}

export interface UpdateUnitLessonAndVideoLectureContentPayloadType {
    _id: string;
    title: string;
    time: string;
    lesson: string;
    videoUrl: string;
    totalTime: string;
    description: string;
}

export interface UpdateUnitLessonAndFillBlankExercisePayloadType {
    _id: string;
    title: string;
    time: string;
    lesson: string;
    questions: QuestionType[];
}
