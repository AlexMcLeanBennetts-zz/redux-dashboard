import Spinner from "./Spinner";
import { useGetPolicyDataQuery } from "store/api/apiSlice";

function LoadingContainer({ children }) {
    const {
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPolicyDataQuery()
    if (isError) {
        console.log(error)
    }

    return (
        <>
            {isLoading && <Spinner />}
            {isSuccess && children}
            {isError && <div><span>Error:</span>{error.error}</div>}
        </>
    )
}

export default LoadingContainer