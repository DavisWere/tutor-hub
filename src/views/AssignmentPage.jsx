import { useEffect } from "react"
import CourseGrid from "../components/dashboard/CourseGrid.jsx"
import axios from "axios";
import BASE_URL from "../api/consants.js";

const AssignmentPage = ()=>{
    const getUsers = async () => {
        const storedUser = JSON.parse(localStorage.getItem('authData'));
    
        try {
          const response = await axios.get(`${BASE_URL}/api/units/`, {
            headers: {
              Authorization: `Bearer ${storedUser?.access}`,
            },
          });
    
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };
    

    useEffect(() => {
        getUsers()
      }, []);

    return <>
        <div className="p-4">
            <CourseGrid/>
        </div>
    </>
}

export default CoursePage