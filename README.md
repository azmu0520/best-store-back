<h2>Technical Requirements </h2>

<ol>
<li>
 <input checked type="checkbox" id="1"> <label for="1">App should support registration and authentication.</label>
 <ul>
 <li>
    Register a user with <a href="/">MAIN_ULR/api/auth/register</a>. 
    <br /> It requires first_name , last_name , email , password.
    <br /> Method='POST' 
 </li>
  <li>
    Register a admin with <a href="/">MAIN_ULR/api/auth/registerAdmin</a>. 
    <br />  It requires first_name , last_name , email , password.
    <br /> Method='POST' 
 </li>
  <li>
    Login a user or admin with <a href="/">MAIN_ULR/api/auth/login</a>. 
    <br /> It requires email , password.
    <br /> Method='POST' 
 </li>
 </ul>
</li>
 <br />
<li>
 <input checked type="checkbox" id="2"> <label for="2">Varified user can add , edit , remove collections</label>
 <ul>
    <li>
        Nonauthenticated users have read-only access with <a href="/">MAIN_ULR/api/collections</a>. 
        <br /> Method='GET' 
    </li>
    <li>
        Create a collection <a href="/">MAIN_ULR/api/collections</a>. 
        <br> It requires name , short_description , topic , createdBy: userId and optional Image
        <br /> Method='POST' 
    </li>
    <li>
        Edit a collection <a href="/">MAIN_ULR/api/collections/collectionId</a>. 
        <br> It requires either of name , short_description , topic , createdBy: userId and optional Image
        <br /> Method='PATCH' 
    </li>
    <li>
        Remove a collection <a href="/">MAIN_ULR/api/collections/collectionId</a>.
        <br /> Method='DELETE' 
    </li>
 </ul>
</li>
 <br />
<li>
 <input type="checkbox" id="4"> <label for="4">When you have a collection you can add , edit and delete items in it</label>
 <ul>
    <li>
        Add item to the collection <a href="/">MAIN_ULR/api/items</a>.
        <br> 
    </li>
 </ul>

</li>
 <br />
<li>
 <input type="checkbox" id="5"> <label for="5">Each item has tags (user enters several tags with autocompletion, when user starts to enter tag, you show the dropdown with the words entered on the site before by all users).</label>
</li>
 <br />
<li>
 <input type="checkbox" id="6"> <label for="6">Collections consists of likes and comments . You have to implement automatic fetching of new comments.</label>
</li>
</ol>
