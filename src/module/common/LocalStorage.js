import AsyncStorage from '@react-native-async-storage/async-storage';


const set = (key, value) => {
    AsyncStorage.setItem(key, value);

}
const get = async (key) => {
    let value = null;
    try {
        value = await AsyncStorage.getItem(key);
    } catch (error) { }
    if (value) {
        try {
            value = JSON.parse(value)
        } catch (error) { }
    }
    return value;
}

const clear = (key) => {
    return AsyncStorage.setItem(key, "");
};


const LocalStorage = {
    set,
    get,
    clear
}
export default LocalStorage;