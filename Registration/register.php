<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize user inputs
    $fullname = htmlspecialchars(trim($_POST['fullname']));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $passwordPlain = trim($_POST['password']);
    $passwordHashed = password_hash($passwordPlain, PASSWORD_DEFAULT); // store hashed password
    $team = htmlspecialchars(trim($_POST['team']));
    $country = htmlspecialchars(trim($_POST['country']));
    $subscribe = isset($_POST['subscribe']) ? 'Yes' : 'No';

    // Prepare data line for both registration and login
    // Format: Fullname | Email | Hashed Password | Team | Country | Subscribe
    $dataLine = "$fullname | $email | $passwordHashed | $team | $country | $subscribe\n";

    // Store data in registrations.txt
    file_put_contents("../registration/registrations.txt", $dataLine, FILE_APPEND);

    // Confirmation page
    echo "<!DOCTYPE html>
    <html>
    <head>
        <title>Registration Successful</title>
        <link rel='stylesheet' href='registration.css'>
    </head>
    <body>
        <div class='container'>
            <h2>Registration Successful!</h2>
            <p>Thank you, <strong>$fullname</strong>, for joining the Football Network.</p>
            <p>Your login email is: <strong>$email</strong></p>
            <p>We’ve registered your favorite team as <strong>$team</strong> and country as <strong>$country</strong>.</p>
            <a href='../login/login.html'>Go to Login</a>
        </div>
    </body>
    </html>";
} else {
    // Redirect back if accessed directly
    header("Location: registration.html");
    exit;
}
?>
