import React from "react";

const UserContext=React.createContext()
export default UserContext;
/*
! 1- Created a context
Now we will wrap with this scontext to the components so that it becomes provider for them
 
<UserContext>
    <Login/>
    <Card/>
</UserContext>
*/