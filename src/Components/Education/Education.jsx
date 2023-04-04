import React from 'react'
import './Education.css'
import {IoSchoolSharp}  from 'react-icons/io5';

const Education = () => {
  return (
    <div className='education' id='Education'>
        <div className="e-heading">
            <span>My <span className='a-span'>Education</span></span>
            <hr />
        </div>
        <div className='e-desc'>
            <div className='first-container-education'>
                <div className='e-degree-container'>
                    <div className='e-circle'>
                        <IoSchoolSharp/>
                    </div>
                    <div className='e-circle-right-container'>
                        <span className='e-year'>2022</span>
                        <span >BE/BTech</span>
                        <span>Savitribai Phule Pune University, 
                            Pune, Maharashtra</span>
                    </div>
                </div>
                <div className='e-degree-container'>
                    <div className='e-circle'>
                        <IoSchoolSharp/>
                    </div>
                    <div className='e-circle-right-container'>
                        <span className='e-year'>2017</span>
                        <span >HSC</span>
                        <span>Maharashtra State Board, 
                            Pune, Maharashtra</span>
                    </div>
                </div>
            </div>
            <div className='e-degree-container'>
                    <div className='e-circle'>
                        <IoSchoolSharp/>
                    </div>
                    <div className='e-circle-right-container'>
                        <span className='e-year'>2015</span>
                        <span >SSC</span>
                        <span>Maharashtra State Board, 
                            Pune, Maharashtra</span>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Education