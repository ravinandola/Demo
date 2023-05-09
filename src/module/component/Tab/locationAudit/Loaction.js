import { Button, ButtonGroup, Divider, ListItem, Tab, Text } from "@rneui/base";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const notStartData = [{
    userName: "test",
    location: "surat",
    taskCreated: '23/05/2003',
    status: "No started"
},
{
    userName: "test2",
    location: "surat",
    taskCreated: '23/05/2003',
    status: "No started"
}, {
    userName: "test3",
    location: "surat",
    taskCreated: '23/05/2003',
    status: "No started"
}, {
    userName: "test4",
    location: "surat",
    taskCreated: '23/05/2003',
    status: "No started"
}, {
    userName: "test5",
    location: "surat",
    taskCreated: '23/05/2003',
    status: "No started"
}, {
    userName: "test6",
    location: "surat",
    taskCreated: '23/05/2003',
    status: "No started"

},
];
const InprogessData = [
    {
        userName: "test",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "in progress"

    },
    {
        userName: "test2",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "in progress"
    }, {
        userName: "test3",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "in progress"

    }, {
        userName: "test4",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "in progress"

    }, {
        userName: "test5",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "in progress"

    }, {
        userName: "test6",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "in progress"

    },
];
const CompletedData = [
    {
        userName: "test5",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "Completed"
    }, {
        userName: "test6",
        location: "surat",
        taskCreated: '23/05/2003',
        status: "Completed"
    }
]

const Loaction = ({ navigation }) => {
    const [list, setList] = useState(notStartData);
    const [index, setIndex] = useState(0);

    const buttons = ['Not started', 'OverDue', 'In Progress', 'Completed']
    const updateIndex = (index) => {
        setIndex(index)
        if (index === 0) {
            setList(notStartData);
        } else if (index === 2) {
            setList(InprogessData)
        } else if (index == 3) {
            setList(CompletedData)
        } else {
            setList([])

        }
    };

    const handleAudit = () => {
        navigation.navigate('auditSubmit');

    };
    const handleNotStartedAudit = (item) => {
        if (item.status == 'Completed') {
            navigation.navigate('PreviewMode');
            return;
        }
        navigation.navigate('MangeAudit');
    }

    return (
        <>
            <View style={{ backgroundColor: 'white', height: 700 }}>
                <View style={{ alignItems: 'center', padding: 10, backgroundColor: '#317F91' }}>
                    <Text style={{ color: "white" }}>LOCATION AUDIT</Text>
                </View>
                <ButtonGroup
                    onPress={updateIndex}
                    selectedIndex={index}
                    buttons={buttons}
                    containerStyle={{ height: 30 }}
                />
                <Divider />
                <ScrollView>
                    {
                        list.map((item) => {
                            return <>
                                <View style={{ backgroundColor: 'white' }}>
                                    <ListItem onPress={() => { handleNotStartedAudit(item) }}>
                                        <ListItem.Content>
                                            <ListItem.Title>{item.userName}</ListItem.Title>
                                            <ListItem.Subtitle>location :{item.location}</ListItem.Subtitle>
                                            <ListItem.Subtitle>Task Creat... :{item.taskCreated}</ListItem.Subtitle>
                                            <ListItem.Subtitle>Due Date :  -</ListItem.Subtitle>
                                            <ListItem.Subtitle>status :{item.status}</ListItem.Subtitle>
                                        </ListItem.Content>
                                        <ListItem.Chevron></ListItem.Chevron>
                                    </ListItem>
                                    <Divider />
                                </View >
                            </>

                        })
                    }
                    {
                        list.length === 0 && <View style={{ alignItems: 'center', paddingTop: 30 }}><Text>
                            Data Not Found
                        </Text></View>
                    }
                </ScrollView>
                <Divider />
                <View style={{ padding: 20, backgroundColor: 'white' }}>
                    <Button size="lg" buttonStyle={{ borderRadius: 10, marginBottom: 20, backgroundColor: "#317F91" }} onPress={() => {
                        handleAudit()
                    }}>Submit Audit</Button>
                </View>
            </View>
        </>
    )
}
export default Loaction