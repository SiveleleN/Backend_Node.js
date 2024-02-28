<template >

<div class="contact">
    <h1>Contact Us</h1>
    <form action="https://formspree.io/f/mleqnepv" method="POST">
        <label>
            Name:
            <input type="text" name="name" required>
        </label>
        <label>
            Last Name:
            <input type="text" name="last_name" required>
        </label>
        <label>
            Email address:
            <input type="email" name="email" required>
        </label>
        <label>
            Your message:
            <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
    </form>
    <div class="contact-info">
        <p>Email: heathermtuedwa@gmail.com</p>
        <p>Phone numbers: 065 526 1545</p>
    </div>
</div>
<!-- <div class="h-social">
        <a href="#" class="social vk-bg">
            <i class="fi fi-br-globe"></i>
        </a>
        <a href="#" class="social facebook-bg">
            <i class="fi fi-social-facebook"></i> 
        </a>
        <a href="#" class="social instagram-bg">
            <i class="fi fi-br-envelope"></i>
        </a>
        <a href="#" class="social behance-bg">
            <i class="fi fi-social-github"></i> 
        </a>
    </div> -->
</template>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color:beige;
    margin: 0;
    padding: 0;
  }

  .contact {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background-color: #dcc180;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    animation: fadeInScale 0.5s ease-in-out forwards;
    opacity: 0;
    transform: scale(0.95);
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  h2 {
    margin-top: 0;
  }

  form label {
    display: block;
    margin-bottom: 10px;
  }

  .contact form label {
    display: block;
    margin-bottom: 15px;
}

.contact form input[type="text"],
.contact form input[type="email"],
.contact form textarea {
    width: calc(100% - 22px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
}

  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }

  button[type="submit"] {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  .contact-info {
    margin-top: 20px;
  }

  .contact-info p {
    margin: 5px 0;
  }
</style>