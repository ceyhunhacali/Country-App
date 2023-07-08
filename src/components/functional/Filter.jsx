import { nanoid } from 'nanoid';
import React, { useContext } from 'react'
import { FiSearch } from "react-icons/fi"
import { DataContext } from '../../context/DataContext';

function Filter({ data, setData }) {
    const { select, setSelect, search, setSearch } = useContext(DataContext)

    const handleSelect = (e) => {
        setSelect(e.target.value);
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const regions = [...new Set(data.map(item => item.region))]



    const regionOPtions = regions.map(region => <option key={nanoid()} value={region}> {region}</option>)
    return (
        <div className='d-flex justify-content-between gap-3 py-5 px-sm-4 px-5 flex-column flex-md-row '>

            <div id='SearchBar' className='border gap-2 py-2 px-3 d-flex align-items-center bg-white '>
                <FiSearch />
                <input onChange={handleSearch} id='Search' placeholder='Search for a country...' type="text" className='p-1 border-0' />
            </div>

            {

                <select onChange={handleSelect} id='Regions' value={select} className='p-2 border '>
                    <option value='All'>All</option>
                    {regionOPtions}
                </select>

            }

        </div>
    )
}

export default Filter