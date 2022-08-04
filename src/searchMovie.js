import React from 'react';
export default function  SearchMovie(){

    return(
        <div>
            <div className='searchBar'>
                <div className='mainSearchBar'>
                    <h2>Search movie</h2>
                    <input type="text" placeholder='search...'/>
                </div>
            </div>

            <div className='mainMovie'>
                <div className='mainBoxs'>
                    <div className='boxs'>
                        <img src=''/>
                        <div className='movieInfo'></div>

                    </div>
                </div>

            </div>
        </div>
    )

}