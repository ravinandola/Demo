import { ButtonGroup, Image, Text } from "@rneui/base"
import { useState } from "react";
import { ScrollView, View } from "react-native"
import OpcButtonGroup from "../../../common/OpcButtonGroup";
import Layout from "../../../common/Layout";
import DocCardList from "../../../common/DocCardList";
const Enrolments = () => {
    const [index, setIndex] = useState(0);

    let value = [1, 2, 4, 4, 6, 7, 8, 9, 0, , 656, 56, 5, 65, 65, 6, 56, 3, 1];
    const halderTraining = () => {
        console.log("ff")
    };
    const buttons = ['Enrolments', 'All Programs']
    const updateIndex = (index) => {
        setIndex(index)
    }
    return (
        <>

            <Layout title={"TRAINING"} isScroll={true}>
                <OpcButtonGroup
                    updateIndex={updateIndex}
                    index={index}
                    buttons={buttons}
                    containerStyle={{ height: 35, borderRadius: 1 }}
                />
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: 'traspernt',
                    flexWrap: 'wrap',
                    alignItems: 'center'

                }}>
                    <DocCardList />
                </View >
            </Layout>
        </>
    )
}
export default Enrolments