import { useState, useEffect } from 'react';
// ##################################
// #       IMPORT Components
// ##################################
import Logo from '@assets/logo.png';

// ##################################
// #       IMPORT Npm
// ##################################
import { Link } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import { Home, FolderKanban, Blocks, MessageCirclePlus, Layers, SquareLibrary } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
    // Redirect with React Router Dom v6
    const navigate = useNavigate();
    const location = useLocation();

    // Style sidebar
    const panelStyles: React.CSSProperties = {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginLeft: '20px',
        marginTop: '20px',
    };

    // fixed when screen smaller 470px
    const [expanded, setExpanded] = useState<boolean>(() => window.innerWidth > 1000);

    // Set active page
    const [activePage, setActivePage] = useState<string>('');

    // Navigation when clicking on link
    const redirect = (path: string) => {
        navigate(path);
    };

    // Get pathname with useLocation hooks (example: /grammar)
    useEffect(() => {
        const pathname = location.pathname;
        setActivePage(pathname);
    }, [location.pathname]);

    // Handle resize when expand to the sidebar
    useEffect(() => {
        const handleResize = () => {
            setExpanded(window.innerWidth > 1000);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            className={`scrollbar duration-50 h-full w-[350px] max-w-max 
            overflow-auto border-r-2 border-bdCustom transition-all sm:overflow-x-hidden
            ${expanded ? 'phone:fixed phone:z-10 pm:fixed pm:z-10 tablet:fixed tablet:z-10' : ''}`}
        >
            <Sidenav
                defaultOpenKeys={['3', '4']}
                expanded={expanded}
                className="h-full bg-bgCustom"
            >
                <Sidenav.Body>
                    <Nav activeKey="1">
                        <Link to="/">
                            <img
                                width={16}
                                height={16}
                                src={Logo}
                                alt="logo"
                                className={`mb-8 ml-4 mt-6 w-16 select-none ${
                                    !expanded ? 'sm:ml-1 sm:w-12 md:ml-1 md:w-12' : ''
                                } 
                                sm:mb-4 phone:mb-2 phone:ml-2 phone:w-10`}
                            />
                        </Link>

                        {/*=========================================*/}

                        <Nav.Item
                            eventKey="1"
                            panel
                            style={panelStyles}
                            className={`phone:hidden ${!expanded ? 'hidden' : ''} text-textCustom`}
                        >
                            General
                        </Nav.Item>

                        {/*=========================================*/}

                        <Nav.Item
                            onClick={() => redirect('/admin')}
                            eventKey="2"
                            className={`bg-bgCustom before:absolute ${
                                activePage === '/admin' ? 'before:h-8' : 'before:h-0'
                            } before:bottom-2 
                            before:left-0 before:w-[3px] before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200`}
                            icon={<Home className="absolute left-5" strokeWidth={1.5} size={17} />}
                        >
                            <span className="transition-all hover:text-[#8bbf64]">Dashboard</span>
                        </Nav.Item>

                        {/*=========================================*/}

                        <Nav.Menu
                            className="bg-bgCustom"
                            onClick={() => setExpanded(true)}
                            eventKey="3"
                            title="Widgets"
                            icon={
                                <Blocks className="absolute left-5" strokeWidth={1.5} size={17} />
                            }
                        >
                            <Nav.Item
                                onClick={() => redirect('/admin/general')}
                                eventKey="3-1"
                                className={`before:absolute ${
                                    activePage === '/admin/general' ? 'before:h-8' : 'before:h-0'
                                } before:bottom-2 before:left-0 before:w-[3px]
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200`}
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    General
                                </span>
                            </Nav.Item>

                            <Nav.Item
                                onClick={() => redirect('/admin/chart')}
                                eventKey="3-2"
                                className={`before:absolute ${
                                    activePage === '/admin/chart' ? 'before:h-8' : 'before:h-0'
                                } before:bottom-2 before:left-0 before:w-[3px]
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200`}
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    Chart
                                </span>
                            </Nav.Item>
                        </Nav.Menu>

                        {/*=========================================*/}
                        <div className="h-[1px] w-full bg-slate-200"></div>

                        {/*=========================================*/}
                        <Nav.Item
                            panel
                            style={panelStyles}
                            className={`phone:hidden ${!expanded ? 'hidden' : ''} text-textCustom`}
                        >
                            Application
                        </Nav.Item>

                        {/*=========================================*/}
                        <Nav.Menu
                            className="bg-bgCustom"
                            onClick={() => setExpanded(true)}
                            eventKey="4"
                            title="Courses"
                            icon={
                                <FolderKanban
                                    className="absolute left-5 text-textSidebar"
                                    strokeWidth={1.5}
                                    size={17}
                                />
                            }
                        >
                            <Nav.Item
                                onClick={() => redirect('/admin/courses')}
                                eventKey="4-1"
                                className={`before:absolute ${
                                    activePage === '/admin/courses' ? 'before:h-8' : 'before:h-0'
                                } before:bottom-2 before:left-0 before:w-[3px]
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200`}
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    Courses List
                                </span>
                            </Nav.Item>

                            <Nav.Item
                                eventKey="4-2"
                                className="before:absolute before:bottom-2 before:left-0 before:h-0 before:w-[3px] 
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200"
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    Create New
                                </span>
                            </Nav.Item>
                        </Nav.Menu>

                        {/*=========================================*/}
                        <Nav.Menu
                            className="bg-bgCustom"
                            onClick={() => setExpanded(true)}
                            eventKey="5"
                            title="Chat"
                            icon={
                                <MessageCirclePlus
                                    className="absolute left-5 text-textSidebar"
                                    strokeWidth={1.5}
                                    size={17}
                                />
                            }
                        >
                            <Nav.Item
                                onClick={() => redirect('/admin/courses')}
                                eventKey="5-1"
                                className={`before:absolute ${
                                    activePage === '/admin/courses' ? 'before:h-8' : 'before:h-0'
                                } before:bottom-2 before:left-0 before:w-[3px]
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200`}
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    Private Chat
                                </span>
                            </Nav.Item>

                            <Nav.Item
                                eventKey="5-2"
                                className="before:absolute before:bottom-2 before:left-0 before:h-0 before:w-[3px] 
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200"
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    Group Chat
                                </span>
                            </Nav.Item>
                        </Nav.Menu>

                        {/*=========================================*/}
                        <Nav.Menu
                            className="bg-bgCustom"
                            onClick={() => setExpanded(true)}
                            eventKey="6"
                            title="Card Manager"
                            icon={
                                <Layers
                                    className="absolute left-5 text-textSidebar"
                                    strokeWidth={1.5}
                                    size={17}
                                />
                            }
                        >
                            <Nav.Item
                                onClick={() => redirect('/admin/courses')}
                                eventKey="6-1"
                                className={`before:absolute ${
                                    activePage === '/admin/courses' ? 'before:h-8' : 'before:h-0'
                                } before:bottom-2 before:left-0 before:w-[3px]
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200`}
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    Card List
                                </span>
                            </Nav.Item>

                            <Nav.Item
                                eventKey="6-2"
                                className="before:absolute before:bottom-2 before:left-0 before:h-0 before:w-[3px] 
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200"
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    New Card
                                </span>
                            </Nav.Item>
                        </Nav.Menu>

                        {/*=========================================*/}
                        <Nav.Menu
                            className="bg-bgCustom"
                            onClick={() => setExpanded(true)}
                            eventKey="7"
                            title="Books"
                            icon={
                                <SquareLibrary
                                    className="absolute left-5 text-textSidebar"
                                    strokeWidth={1.5}
                                    size={17}
                                />
                            }
                        >
                            <Nav.Item
                                onClick={() => redirect('/admin/courses')}
                                eventKey="7-1"
                                className={`before:absolute ${
                                    activePage === '/admin/courses' ? 'before:h-8' : 'before:h-0'
                                } before:bottom-2 before:left-0 before:w-[3px]
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200`}
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    Books List
                                </span>
                            </Nav.Item>

                            <Nav.Item
                                eventKey="7-2"
                                className="before:absolute before:bottom-2 before:left-0 before:h-0 before:w-[3px] 
                                before:bg-[#8bbf64] hover:before:h-8 hover:before:transition-all hover:before:duration-200"
                            >
                                <span className="text-textSidebar transition-all hover:text-[#8bbf64]">
                                    New Books
                                </span>
                            </Nav.Item>
                        </Nav.Menu>

                        {/*=========================================*/}
                        <div className="h-[1px] w-full bg-slate-200"></div>

                        {/*=========================================*/}
                        <Nav.Item
                            panel
                            style={panelStyles}
                            className={`phone:hidden ${!expanded ? 'hidden' : ''} text-textCustom`}
                        >
                            FORMS & TABLE
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>

                <div className="bg-bgCustom">
                    <Sidenav.Toggle onToggle={(expanded) => setExpanded(expanded)} />
                </div>
            </Sidenav>
        </div>
    );
};

export default AdminSidebar;
