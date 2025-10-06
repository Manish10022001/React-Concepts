import { useState, useEffect } from "react";
import axios from "axios";
export default function Courses() {
  const [courses, setCourses] = useState([
    { title: "", rating: 0, faculty: "", duration: "", start: "", image: "" },
  ]);
  useEffect(() => {
    axios.get("courses.json").then((response) => {
      setCourses(response.data);
    });
  });

  return (
    <div className="container-fluid">
      <main className="d-flex">
        {courses.map((course) => (
          <div className="card p-2 m-2" key={course.title}>
            <img
              className="card-image-top"
              src={course.image}
              style={{
                objectFit: "cover",
                height: "200px",
                width: "100%",
              }}
            />
            <div className="card-header">
              <div>{course.title}</div>
            </div>

            <div className="card-body">
              <div>
                <span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span>{course.rating}</span>
              </div>

              <dl className="row">
                <dt className="col-5">Start : </dt>
                <dd className="col-7">{course.start}</dd>
                <dt className="col-5">Duration : </dt>
                <dd className="col-7">{course.duration}</dd>
                <dt className="col-5">Faculty : </dt>
                <dd className="col-7">{course.faculty}</dd>
              </dl>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
