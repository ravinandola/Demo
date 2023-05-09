import AsyncStorage from '@react-native-async-storage/async-storage';


const set = (key, value) => {
    AsyncStorage.setItem(key, value);

}
const get = async (key) => {
    value = await AsyncStorage.getItem(key);
    if (value) {
        value = JSON.parse(value)
    }
    return value
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