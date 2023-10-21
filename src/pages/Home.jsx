import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Tests from '../components/Tests';
import "../styles/Home.css";

export default function Home() {


    return (
      <>
        <div className="container">
          <Tests />
        </div>
      </>
    );
}