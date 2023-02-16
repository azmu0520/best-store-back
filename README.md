<h2>Technical Requirements </h2>

<ol>
<li>
 <input value="checked" type="checkbox" id="1"> <label for="1">App should support registration and authentication.</label>
 <ul>
 <li>
 Register a user with <a href="/">MAIN_ULR/api/auth/register</a>. <br /> It requires first_name , last_name , email , password.
 </li>
  <li>
 Register a admin with <a href="/">MAIN_ULR/api/auth/registerAdmin</a>. <br />  It requires first_name , last_name , email , password.
 </li>
  <li>
 Login a user or admin with <a href="/">MAIN_ULR/api/auth/login</a>. <br /> It requires email , password.
 </li>
 </ul>
</li>
 <br />
<li>
 <input type="checkbox" id="2"> <label for="2">App should support registration and authentication.</label>
</li>
 <br />
<li>
 <input type="checkbox" id="3"> <label for="3">Each collection consists of: name, short description with markdown formatting, "topic" , optional image</label>
</li>
 <br />
<li>
 <input type="checkbox" id="4"> <label for="4">Also collection allows to define custom fields There 3 fixed field (id, name, tags) but it's also possible to add dynamically something from the following - 3 number filed, 3 string filed, 3 multiline text fields, 3 dates, 3 boolean checkboxes.</label>
</li>
 <br />
<li>
 <input type="checkbox" id="5"> <label for="5">Each item has tags (user enters several tags with autocompletion, when user starts to enter tag, you show the dropdown with the words entered on the site before by all users).</label>
</li>
 <br />
<li>
 <input type="checkbox" id="6"> <label for="6">Collections consists of likes and comments . You have to implement automatic fetching of new comments.</label>
</li>
 <br />
<li>
 <input type="checkbox" id="7"> <label for="7">Nonauthenticated used have read-only access (they can use search, however cannot create collections and items, create comments or likes).</label>
</li>
</ol>
