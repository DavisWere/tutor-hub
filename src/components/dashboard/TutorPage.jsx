import { useEffect } from "react"
import CourseGrid from "./CourseGrid"
import axios from "axios";
import BASE_URL from "../../api/consants";
import Dashboard from "../layout/TheDashboardView";

const TutorPage = ()=>{
    const getUsers = async () => {
        const storedUser = JSON.parse(localStorage.getItem('authData'));
    
        try {
          const response = await axios.get(`${BASE_URL}/api/tutor/availability/`, {
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
            <Dashboard>
               Tutors
            </Dashboard>
            
        </div>
    </>
}

export default TutorPage