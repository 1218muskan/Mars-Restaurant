import React, { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Layout from "../Layout/Layout"
import { DataStore } from '../utils/DataStore';
import Chatbox from '../components/Chatbox'
export default function LiveData({ }) {
  const router = useRouter();
  const { state } = useContext(DataStore);
  const { userInfo } = state;



  return (
    <Layout>
    <Chatbox/>
    </Layout>
  );
}

