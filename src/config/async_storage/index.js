import AsyncStorage from "@react-native-async-storage/async-storage"

export const getUser = async () => {
    try {
        const userID = await AsyncStorage.getItem('User_id')
        if (userID) return userID
        else return null;
    } catch (error) {
        console.log(error?.message)
    }
}

export const setUser = async (userID) => {
    try {
        if (userID)
            await AsyncStorage.setItem('User_id', userID)
    } catch (error) {
        console.log(error?.message)
    }
}