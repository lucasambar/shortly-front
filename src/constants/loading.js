import { CirclesWithBar, RotatingLines } from "react-loader-spinner";

export function Loading () {
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

export function LoadingBars () {
    return <CirclesWithBar
    height="100"
    width="100"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    outerCircleColor=""
    innerCircleColor=""
    barColor=""
    ariaLabel='circles-with-bar-loading'
  />
}