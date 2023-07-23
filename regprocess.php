<?php

 require "databaseCon.php";
 $name= $_POST["fullName"];
 $mail= $_POST["email"];
 $pass= $_POST["password"];
 $id= $_POST["id"];
 $phone= $_POST["phoneNumber"];
 $birth= $_POST["birthday"];

// if($name="" || $mail="" || $pass="" || $id="" || $phone="" || $birth="")
// {
//     echo '<script> alert("empty field") </script>';
//     require "CreditsRegistartion_3.html";
// }

// else if(filter_var($mail, FILTER_VALIDATE_EMAIL) == false)
// {
//     echo"<script>alert('Invalid email!');</script>";
//     require "CreditsRegistartion_3.html";
// }
// else
// {
    $sql = "SELECT * FROM studentlogin WHERE _Name = '$name'";
    $result = mysqli_query($con, $sql) or die(mysqli_error($con));
    if(mysqli_num_rows($result)>=1)
    {
        echo"<script>alert('Username already exists!');</script>";
        require "CreditsRegistartion_3.html";
    }
    else
    {
        $sql = "INSERT INTO studentlogin (_Name, _Password, E_mail,ID,Birth_Date,Phone_Number) VALUES ('$name', '$pass', '$mail',$id,$birth,$phone)";
        $result = mysqli_query($con, $sql) or die(mysqli_error($con));
        echo"<script>alert('Registration successful!');</script>";
        require "CreditsSubjects.html";
    }
// }
mysqli_close($con);

?>