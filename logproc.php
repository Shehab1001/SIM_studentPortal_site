<?php

require "databaseCon.php";

    $id = $_POST["id"];
    $pass = $_POST["password"];
    $query="select * from studentlogin where _Password ='$pass' and ID = '$id'";
    $result = mysqli_query($con,$query) or die(mysqli_error($con));
    if(mysqli_num_rows($result)>= 1)
{
    echo"<script>alert('Login successful!');</script>";
    require "CreditsSubjects.html";

}
else
{
    echo"<script>alert('Invalid ID or password!');</script>";
    require "CreditsLogin_2.html";
}



?>+