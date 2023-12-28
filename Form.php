<?php
$servername='localhost';
$username='root';
$password='';
$dbname = "Axis Database";
try {
  $Name = $_POST['Name'];
  $Phone = $_POST['Phone'];
  $Email = $_POST['Email']; 
  $Address = $_POST['Address'];
  $City = $_POST['City'];
  $PinCode = $_POST['PinCode'];
  $Problem = $_POST['Problem'];
    date_default_timezone_set("Asia/Calcutta");
    $insertdate = date("Y-m-d H:i:s");
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    /* set the PDO error mode to exception */
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   $sql = "INSERT INTO info (Name,Phone,Email,Address,City,PinCode,Problem)
    VALUES ('$Name','$Phone','$Email','$Address','$City','$PinCode','$Problem')";
    $conn->exec($sql);
    // echo'<script>alert("Form is submitted");</script>';
    header("Location: Thankyou.html");
    }
catch(PDOException $e)
    {

    	echo "Error: " . $e->getMessage();
    }

$conn = null;
?>
