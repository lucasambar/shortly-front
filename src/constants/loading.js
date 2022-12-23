import { RotatingLines } from "react-loader-spinner";

export default function Loading () {
    return (
        <RotatingLines 
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            width="40"
            visible={true}
        />
    )
}