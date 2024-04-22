import { Layout, List } from '@ui-kitten/components';
import { DessertCard } from './DessertCard';
import { MealCardEntity } from '../../../domain/entities/mealEntity';
import  React, { useCallback, useState } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent, VirtualizedList, ActivityIndicator } from 'react-native';


interface Props{
  data: MealCardEntity[]
}
const ListOfDesserts = React.memo(({ data }: Props) => {

  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [batchIndex, setBatchIndex] = useState<number>(0);

  const handleEndReached = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setTimeout(() => {
        setBatchIndex((prevIndex) => prevIndex + 4);
        setLoadingMore(false);
      }, 1000); 
    }
  };

  const renderItem = useCallback(({ item }: { item: MealCardEntity }) => {
    return <DessertCard meal={item} />;
  }, []);

  const renderFooter = () => {
    if (loadingMore) {
      return <ActivityIndicator style={{ marginVertical: 30 }} />;
    } else {
      return null;
    }
  };

  const getItemCount = () => {
    return Math.min(8 + batchIndex, data.length);
  };
  return (
    <Layout>
       <VirtualizedList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => `${item.id}-${item.name}`}
      getItemCount={getItemCount} 
      getItem={(data, index) => data[index]}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1} 
      ListFooterComponent={renderFooter}
     
    />
    </Layout>
  );
});
export default ListOfDesserts

{/* <List
        
data={data}
numColumns={2}
keyExtractor={(item) => `${item.id}-${item.name}`}
renderItem={({ item }: { item: MealCardEntity }) => (
  <DessertCard meal={item as MealCardEntity} />
)}
showsVerticalScrollIndicator={false}
initialNumToRender={10}
onScroll={handleScroll}

/> */}