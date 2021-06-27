

/*
? tell us why the user is still loading 
? write the function for fetching the users
*/

const UserComp = (props) => {
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