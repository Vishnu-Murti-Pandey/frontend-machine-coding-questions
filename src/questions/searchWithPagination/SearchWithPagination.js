import React, { useEffect, useState } from 'react'
import './search.css'

const BASE_URL = "https://api.punkapi.com/v2/beers";

const SearchWithPagination = () => {

  const [dataList, setDataList] = useState([]);
  const [searchData, setSearchData] = useState();
  const [page, setPage] = useState(1);

  const options = [1, 2, 3, 4, 5];

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`${BASE_URL}?page=${page}&per_page=10`);
      const data = await response.json();
      setDataList([...data]);
    }
    getData();
  }, [page])

  const handleSelectChange = (e) => {
    setPage(e.target.value);
  }

  const handleSearch = (e) => {
    setSearchData(e.target.value);
  }

  return (
    <div className='main'>
      <div className='searchBox'>
        <input type="text" id='inputBox'
          placeholder='Search your query'
          onChange={handleSearch}
          value={searchData}
        />
      </div>

      <div className='dropdown'>
        <label htmlFor="Select">Select</label>
        <select onChange={(e) => handleSelectChange(e)} name="pageNo" id="pageNo">
          {
            options.map((item) => (
              <option>{item}</option>
            ))
          }
        </select>
      </div>

      {dataList.filter((item) => {
        if (!searchData) {
          return item;
        }
        else if (item.name.toLowerCase().includes(searchData?.toLowerCase())) {
          return item;
        }
      }).map((item) => (
        <div className='container'>
          <div className='logo'>
            <img src={item.image_url} alt="img" />
          </div>
          <div className='nameAndDescription'>
            <div>{item.name}</div>
            <p>{item.tagline}</p>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default SearchWithPagination