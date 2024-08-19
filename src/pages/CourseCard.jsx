import { serverUrl } from "../main";

const CourseCard = ({ course }) => {
   
    return (
        <div
            className="flex flex-col items-center justify-center border-4 border-purple-300 rounded-2xl p-8 "
            key={course?._id}
        >
            <img
                className=" h-48 w-48"
                src={`${serverUrl}/${course.image}`}
                alt="courses_img"
            />
            <h3 className="font-bold mt-2 uppercase">{course.title}</h3>
            <p>
                {" "}
                Instructor- <span className="font-bold">{course.createdBy}</span>
            </p>
            <p>
                Duration - <span className="font-bold">{course.duration}</span>{" "}
                hours
            </p>
            <p>INR {course.price}</p>
            <button className=" bg-red-300 p-2 rounded-md mt-2">
                Get Started
            </button>
        </div>
    );
};

export default CourseCard
