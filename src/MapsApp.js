import React from 'react'
import {MapPages} from './client/pages/MapPages'
import {SocketProvider} from "./client/context/SocketContext";
export const MapsApp = () => {
    return(
        <SocketProvider>
            <MapPages />
        </SocketProvider>
        )
}
