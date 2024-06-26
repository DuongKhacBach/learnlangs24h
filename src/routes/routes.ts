// ##########################
// #      IMPORT NPM        #
// ##########################
import { ComponentType } from 'react';
import loadable from '@loadable/component';

// ##########################
// #    IMPORT Components   #
// ##########################
const Home = loadable(() => import('@components/Home/Home'));
const Grammar = loadable(() => import('@components/Courses/Grammar/Grammar'));
const Profile = loadable(() => import('@components/Profile/Profile'));

/* -------------------------------------------------------------------------- */
/*                               ADMIN COMPONENT                              */
/* -------------------------------------------------------------------------- */
const Dashboard = loadable(() => import('@admin/components/Dashboard'));
const CoursesList = loadable(() => import('@admin/components/CoursesManager/CoursesList'));
const LessonTable = loadable(() => import('@admin/components/CoursesManager/LessonTable'));
const UnitLesson = loadable(() => import('@admin/components/CoursesManager/UnitLesson'));
const GrammarManagement = loadable(() => import('@admin/components/CoursesManager/Grammar/Update/Grammar'));
const Messenger = loadable(() => import('@components/Messenger/Messenger'));

interface PublicRouteType {
    path: string;
    component: ComponentType;
    layout?: React.FC | null;
}

interface ProtectedRouteType {
    path: string;
    component: ComponentType;
    layout?: React.FC | null;
}

/* -------------------------------------------------------------------------- */
/*                                PUBLIC ROUTE                                */
/* -------------------------------------------------------------------------- */
const publicRoute: PublicRouteType[] = [
    {
        path: '/',
        component: Home,
    },
];

/* -------------------------------------------------------------------------- */
/*                               PROTECTED ROUTE                              */
/* -------------------------------------------------------------------------- */
const protectedRoute: ProtectedRouteType[] = [
    {
        path: '/grammar/:id',
        component: Grammar,
    },
    {
        path: '/profile/:nickname',
        component: Profile,
    },
    {
        path: '/messages',
        component: Messenger,
    },
];

/* -------------------------------------------------------------------------- */
/*                                 ADMIN ROUTE                                */
/* -------------------------------------------------------------------------- */

const adminRoute: ProtectedRouteType[] = [
    {
        path: '/admin',
        component: Dashboard,
    },
    {
        path: '/admin/courses',
        component: CoursesList,
    },
    {
        path: '/admin/course/:id',
        component: LessonTable,
    },
    {
        path: '/admin/lesson/:id',
        component: UnitLesson,
    },
    {
        path: '/admin/unitlesson/:id',
        component: UnitLesson,
    },
    {
        path: '/admin/course/:id/edit/:unitId',
        component: GrammarManagement,
        layout: null,
    },
];

export { publicRoute, protectedRoute, adminRoute };
