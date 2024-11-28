import {useEffect, useState} from "react"
import axios from "axios";
import BASE_URL from "../api/consants.js";
import Dashboard from "../components/layout/TheDashboardView.jsx";
import {MoreVertical} from "lucide-react";

const UnitPage = ()=>{
    const [courses, setCourses] = useState(['']);

    const getCourses = async () => {
        const storedUser = JSON.parse(localStorage.getItem('authData'));

        try {
            const response = await axios.get(`${BASE_URL}/api/courses/`, {
                headers: {
                    Authorization: `Bearer ${storedUser?.access}`,
                },
            });
            setCourses(response.data.results);

        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };


    useEffect(() => {
        getCourses()
    }, []);

    return <>
        <div className="p-4">
            <Dashboard>
                <div className={'text-purple-600 font-bold text-2xl my-2'}>
                    Courses
                </div>

                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 text-left">Title</th>
                        <th className="px-4 py-3 text-left">Description</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses?.map((unit) => (
                        <tr key={unit.id}>
                            <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className={'flex gap-2 items-center'}>
                                        <div>{unit?.title}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="inline-block px-3 py-1 rounded-full text-xs text-white bg-purple-600">
                                {unit?.description}
                              </span>
                            </td>
                            <td className="px-4 py-3">
                                <div className={'cursor-pointer p-2 hover:border flex items-center justify-center'}>
                                    <MoreVertical size={18} className="text-gray-500"/>
                                </div>

                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </Dashboard>
        </div>
    </>
}

export default UnitPage