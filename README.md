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

<h2>Technical Requirements </h2>

1. [ ] App should support registration and authentication.

2. [ ] A user can create , edit , remove collections and they should filter and sorting

3. [ ] Each collection consists of: name, short description with markdown formatting, "topic" , optional image

4. [ ] Also collection allows to define custom fields There 3 fixed field (id, name, tags) but it's also possible to add dynamically
       something from the following - 3 number filed, 3 string filed, 3 multiline text fields, 3 dates, 3 boolean checkboxes.

5. [ ] Each item has tags (user enters several tags with autocompletion, when user starts to enter tag, you show the dropdown with the words entered on the site before by all users).

6. [ ] Collections consists of likes and comments . You have to implement automatic fetching of new comments.

7. [ ] Nonauthenticated used have read-only access (they can use search, however cannot create collections and items, create comments or likes).
