import { useEffect, useState } from "react"
import NetInfo from "@react-native-community/netinfo";

const  useNetInfo =()=>{
    const  [info, setInfo]= useState()
    useEffect(()=>{
        const unsubscribe = NetInfo.addEventListener((state) => {
            setInfo(state.isConnected);
            });
            return () => {
              unsubscribe();
            };
          }, []);
}
export  default useNetInfo