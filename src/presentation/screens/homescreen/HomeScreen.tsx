import React, { useEffect, useState } from 'react';
import { Layout, Text, Divider } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { getAllMeals } from '../../../redux/features/mealSlice';
import LoadingScreen from '../loader/LoadingScreen';
import ListOfDesserts from '../../components/ui/ListOfDesserts';

export const HomeScreen = () => {

  const dispatch  = useDispatch<AppDispatch>();
  

  const allMeals = useAppSelector((state)=> state.meal.meals);
  const isLoading = useAppSelector((state)=> state.meal.status);
  const userData = useAppSelector((state)=> state.auth.userToken);

  useEffect(() => {
    
    async function firstCall() {
      dispatch(getAllMeals())
    }
    firstCall();
  }, [])
  
  
  if(isLoading === 'loading') return <LoadingScreen />
  return (
    <Layout style={{flex: 1}}>
      <Divider />
        <ListOfDesserts data={allMeals} />
    </Layout>
  );
};




