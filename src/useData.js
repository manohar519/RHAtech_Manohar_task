import React, { useState } from 'react'

const useData = () => {
    const [data,setData]=useState([])
    const getData=()=>{
        fetch('https://dummyjson.com/products').then((res)=>{
            const datas = res.json()
            console.log(datas)
        }).catch((er)=>{
            console.log(er)
        })
    }
  return (
    <div>useData</div>
  )
}

export default useData