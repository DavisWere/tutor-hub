import {useEffect, useState} from "react"
import axios from "axios";
import BASE_URL from "../api/consants.js";
import Dashboard from "../components/layout/TheDashboardView.jsx";
import {MoreVertical} from "lucide-react";

const UnitPage = ()=>{
    const [units, setUnits] = useState(['']);

    const getUnits = async () => {
        const storedUser = JSON.parse(localStorage.getItem('authData'));

        try {
          const response = await axios.get(`${BASE_URL}/api/units/`, {
            headers: {
              Authorization: `Bearer ${storedUser?.access}`,
            },
          });
            setUnits(response.data.results);
    
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };
    

    useEffect(() => {
        getUnits()
      }, []);

    return <>
        <div className="p-4">
            <Dashboard>
                <div className={'text-purple-600 font-bold text-2xl my-2'}>
                    Units
                </div>

                <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                    <thead>
                    <tr>
                        <th className="px-4 py-3 text-left">Instructor Name</th>
                        <th className="px-4 py-3 text-left">Course</th>
                        <th className="px-4 py-3 text-left">Unit Name</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {units?.map((unit) => (
                        <tr key={unit.id}>
                            <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className={'flex gap-2 items-center'}>
                                        <div>{unit?.tutor?.['first name']}</div>
                                        <div>{unit?.tutor?.['last name']}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3">
                              <span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-600">
                                {unit?.course?.title}
                              </span>
                            </td>
                            <td className="px-4 py-3">{unit?.unit_name}</td>
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