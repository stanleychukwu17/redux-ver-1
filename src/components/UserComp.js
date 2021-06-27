import { useEffect } from "react";

/*
? tell us why the user is still loading 
? write the function for fetching the users
*/

const UserComp = (props) => {
    useEffect(() => {
        console.log('checking 123');
    });

    function Loading () {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>For users we're going to load</div>
            <div>
                <Loading />
            </div>
        </div>
    );
}
 
export default UserComp;