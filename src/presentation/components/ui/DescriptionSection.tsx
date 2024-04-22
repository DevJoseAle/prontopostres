import { Layout, Text, Divider, Button, Modal, Card } from '@ui-kitten/components';
import { MealByIdEntity } from "../../../domain/entities/mealEntity"
import { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { shortText } from '../../utils/shortText';

interface Props {
    dessert:MealByIdEntity
}
export const DescriptionSection = ({dessert}:Props) => {

    const [visible, setVisible] = useState(false)
    if(!dessert) return <></>
    return (
        <Layout style={{marginTop: 20}}>
            <Divider style={{borderColor: '#9E9E9E', borderWidth: 0.4, marginHorizontal: 10}}/>
            <Text category='label' 
            style={ styles.title }>Recipe: </Text>
            <Text style={{ textAlign:'justify', color: '#464646',paddingHorizontal: 10}}>{`${shortText(dessert?.instructions)}....`}</Text>

            <Button
            onPress={() => setVisible(!visible)}
             appearance='ghost'
             style={{ width: '40%', alignSelf:'flex-end',  marginTop: -10 }}>
                Read More
            </Button>
            {/* Modal */}
            <Modal
                visible={visible}
                backdropStyle={styles.backdrop}
                onBackdropPress={() => setVisible(false)}
            >   
            <Card disabled={true}
            style={{width: '98%', height:500}} >
                <ScrollView>

                <Text style={{ textAlign:'justify', color: '#464646'}}>{dessert?.instructions} </Text>
                <Button style={styles.button} appearance='ghost' onPress={() => setVisible(!visible)}>
                    DISMISS
                </Button>
                </ScrollView>

            </Card>
            </Modal>
            <Divider style={{borderColor: '#9E9E9E', borderWidth: 0.4, marginHorizontal: 10}}/>
        </Layout>
    )
} 

const styles = StyleSheet.create({
  backdrop: {
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button:{
    marginTop:10
  },
  title:{ 
    textAlign:'left',
    color: '#464646',
    fontSize: 20,
    paddingLeft: 15,
    marginVertical:5

  }
});