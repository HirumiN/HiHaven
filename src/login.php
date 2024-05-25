<?php
// Include the database connection file
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Establish the database connection
    $conn = OpenCon();

    // Check if the email exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify the password
        if (password_verify($password, $user['password'])) {
            echo "Login successful!";
            // Redirect to a different page or start a session
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with this email!";
    }

    // Close the connection
    CloseCon($conn);
}
