import { createContext, useContext, useEffect, useState } from "react";
import { serverUrl } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    async function fetchCourses() { 
        try {
            const { data } = await axios.get(
                `${serverUrl}/api/course/getAllCourses`
            );
            setCourses(data.courses)

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        fetchCourses();
    }, []);
    return (
        <CourseContext.Provider
            value={{
                courses,
                fetchCourses
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export const CourseData =()=> useContext(CourseContext);