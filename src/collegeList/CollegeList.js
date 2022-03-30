import { useState } from "react"
import "./CollegeList.css"
import useFetchDetails from "../service/useFetchDetails";

export default function CollegeList() {
    const [url, setURL] = useState("http://localhost:3000/college")
    const { data: collegeDetails, isLoading, error } = useFetchDetails(url);
    return (
        <div className="college-collection">
            <h2>College List</h2>
            {error && <div>{error}</div>}
            {isLoading && <div>Loading Details...</div>}
            <div className="filters">
                <button onClick={() => setURL("http://localhost:3000/college")}>All</button>
                <button onClick={() => setURL("http://localhost:3000/college?location=US")}>US</button>
                <button onClick={() => setURL("http://localhost:3000/college?location=Germany")}>Germany</button>
                {/* <button onClick={() => setURL("http://localhost:3000/college534")}>Error Handle</button> */}
            </div>
            <ul>
                {collegeDetails && collegeDetails.map(college => (
                    <li key={college.id}>
                        <h3>{college.name}</h3>
                        <p>Location: {college.location}</p>
                        <p>Cost: {college.cost}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
