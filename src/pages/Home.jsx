import { nanoid } from 'nanoid'
import React, { useContext, useEffect, useState } from 'react'
import Filter from '../components/functional/Filter'
import Card from '../components/UI/Card'
import { DataContext } from '../context/DataContext';

function Home() {
    const [data, setData] = useState([]);

    const { select, setSelect, search, setSearch } = useContext(DataContext)
    const filteredData = () => {
        return data
            .filter(item => item.name.common !== "Armenia")
            .filter(item => select === "All" ? item : item.region === select)
            .filter(item => item.name.common.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => a.name.common.localeCompare(b.name.common));
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return (
        <>
            <Filter data={data} setData={setData} />
            <div className='d-flex flex-wrap py-3'>
                {filteredData().map(item => <Card key={nanoid()} {...item} />)}
            </div>
        </>
    )
}

export default Home