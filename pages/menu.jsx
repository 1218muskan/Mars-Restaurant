import React,{useContext,useEffect} from "react";
import Box from '@mui/material/Box';
import Layout from "../Layout/Layout"
import Menu from '../models/Menu';
import db from '../utils/db';
import { DataStore } from '../utils/DataStore';
import { useRouter } from 'next/router';
export default function Payload({items}) {
  const { state} = useContext(DataStore);
  const { userInfo } = state;
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      router.push('/login');
    }
  }, [userInfo,router]);
  return (
    <Layout>
      <Box  style={{overflowX: 'scroll'}}sx={{ width: '100%', typography: 'body1' }}>
      <table  className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th> 
            <th>Price</th> 
            <th>Description</th>  
          </tr>
        </thead>
        <tbody>
          {items.map((element) => {
            return (
              <tr key={element.name} >
                <td>{element.name}</td>
                <td>{parseFloat(element.price).toFixed(2)}</td>
                <td>{element.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const items = await Menu.find({}).lean()
  await db.disconnect();
  return {
    props: {
      items: items.map(db.convertDocToObj),
    },
  };
}
