import { useEffect } from "react";
import { connect } from "react-redux";
import {fetch_all_users} from "../redux/actions.js"

/*
? tell us why the user is still loading 
? write the function for fetching the users
*/

const UserComp = (props) => {
    let {loading, users, err_msg, fetch_all_users} = props;

    useEffect(() => {
        fetch_all_users();
    }, []);

    function Loading () { return <div>Loading...</div> }

    return (
        <div>
            <div>For users we're going to load</div>
            <div>
                {
                    loading ? (<Loading />) : (err_msg)
                    ? (<div>{err_msg}</div>) : (
                        users.map((user) => {
                            return <div>{user.name}</div>
                        })
                    )
                }
            </div>
        </div>
    );
}

//{'loading':true, 'users':[], 'error':null}
let mapStateToProps = (state) => {
    return {
        'loading':state.cake.u_all.loading,
        'users':state.cake.u_all.users,
        'err_msg':state.cake.u_all.err_msg
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        'fetch_all_users': () => dispatch(fetch_all_users())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComp);