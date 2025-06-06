import React, { useEffect, useState } from "react";
import Cards from "./component/Cards";
import Filter from "./component/Filter";
import Navbar from "./component/Navbar";
import Spinner from './component/Spinner';
import { apiUrl, filterData } from "./data.js";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)

  async function fetchData() {
     
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);

      setLoading(false);
    }
    catch (err) {
      return <div>
        <h1>{ err }</h1>
      </div>
    }

   
  
  }

  useEffect(() => {
    
    fetchData();
  }, []);

  
  return (
    <div className="min-h-screen flex flex-col">

      
      <Navbar />

      <Filter filterdata={filterData}
        category={category}
        setCategory={ setCategory}/>

      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      
      </div>
      
    </div>
  );
};

export default App;
