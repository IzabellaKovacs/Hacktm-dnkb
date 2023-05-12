import React, { useEffect, useState } from "react";

const AllAccounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch('url');
          const jsonData = await response.json();
          setAccounts(jsonData);
        } catch (error) {
          console.log('Error fetching data: ', error);
        }
      };
}