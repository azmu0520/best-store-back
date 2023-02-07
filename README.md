<h2>Usage</h2>

<ol>
    <li>User APIs
        <ul>
            <li>
                Get all users <a href="/">mainURL/api/users</a><b>method:'GET'</b>
            </li>
            <li>
                Get a signle user <a href="/">mainURL/api/users/:_id</a><b>method:'GET'</b>
            </li>
            <li>
                Create a new user <a href="/">mainURL/api/users</a><b>method:'POST'</b>. Body requires the following: first_name , last_name , email , password
            </li>
            <li>
                Update a user <a href="/">mainURL/api/users/:_id</a><b>method:'PATCH'</b>
            </li>
            <li>
                Block a user <a href="/">mainURL/api/users/block/:_id</a><b>method:'PATCH'</b>
            </li>
            <li>
                UnBlock a user <a href="/">mainURL/api/users/unblock/:_id</a><b>method:'PATCH'</b>
            </li>
            <li>
                Delete a user <a href="/">mainURL/api/users/:_id</a><b>method:'DELETE'</b>
            </li>
        </ul>
    </li>

</ol>
