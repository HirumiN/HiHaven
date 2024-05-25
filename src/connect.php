<?php
function OpenCon()
{
    $dbhost = "localhost";
    $dbuser = "hirumi";
    $dbpass = "12345678";
    $dbname = "user_audio";

    $conn = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

function CloseCon($conn)
{
    $conn->close();
}
