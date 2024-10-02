<?php
// language-switcher.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div id="google_translate_element">
      <!-- language switching code here -->
    </div>
  `,
})
export class LanguageSwitcherComponent {}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $phone = htmlspecialchars($_POST['Phone']);
    $message = htmlspecialchars($_POST['Message']);

    $to = '2022khaaly@npghs.school.nz'; // Replace with your email address
    $subject = "New Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
}
?>

