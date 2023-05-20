import { Button, Divider, ListItem, Tab, Text } from "@rneui/base";
import { useEffect } from "react";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Layout from "../../../common/Layout";
import { ButtonGroup, FAB } from "@rneui/themed";
import { useTheme } from "@rneui/themed"
import OpcListItem from "../../../common/OpcListItem";
import OpcButtonGroup from "../../../common/OpcButtonGroup";

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
    const { theme } = useTheme();
    let themeColor = theme.colors.primary
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
            <Layout title={'LOCATION AUDIT'}  isScroll={true}>
                <View>
                    <OpcButtonGroup
                        updateIndex={updateIndex}
                        index={index}
                        buttons={buttons}
                        containerStyle={{ height: 35, borderRadius: 1 }}
                    />
                </View>
                <Divider />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        list.map((item) => {
                            return <>
                                <OpcListItem onPress={() => { handleNotStartedAudit(item) }}>
                                    <OpcListItem.Content>
                                        <OpcListItem.Title color={'black'}>{item.userName.toUpperCase()}</OpcListItem.Title>
                                        <OpcListItem.Subtitle style={{ marginTop: 3 }}><OpcListItem.Subtitle color={'black'} >Location: </OpcListItem.Subtitle>{item.location}</OpcListItem.Subtitle>
                                        <OpcListItem.Subtitle style={{ marginTop: 3 }}><OpcListItem.Subtitle color={'black'} >Task Creat: </OpcListItem.Subtitle>{item.taskCreated}</OpcListItem.Subtitle>
                                        <OpcListItem.Subtitle style={{ marginTop: 3 }}><OpcListItem.Subtitle color={'black'} >status: </OpcListItem.Subtitle>{item.status}</OpcListItem.Subtitle>
                                    </OpcListItem.Content>
                                    <ListItem.Chevron></ListItem.Chevron>
                                </OpcListItem>
                                <Divider />
                            </>
                        })
                    }
                    {
                        list.length === 0 && <View style={{ alignItems: 'center', paddingTop: 30 }}><Text>
                            Data Not Found
                        </Text></View>
                    }
                </ScrollView>
                <FAB
                    visible={true}
                    style={{ paddingBottom: 25, position: 'absolute', bottom: 2, end: 20 }}
                    icon={{ name: 'add', color: 'white' }}
                    color={themeColor}
                    onPress={() => {
                        handleAudit()
                    }}
                />
            </Layout >
        </>
    )
}
export default Loaction