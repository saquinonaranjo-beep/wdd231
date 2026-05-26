<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Web Lab Start File">
  <meta name="author" content="Paul Cheney">

  <link rel="stylesheet" href="styles/small.css">
  <link rel="stylesheet" href="styles/large.css">

  <title>Temple Gallery</title>
</head>

<body>

  <header>
    <span>Temple Gallery</span>
  </header>

  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Temples</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

  <main>

    <h1>Temple Gallery</h1>

    <!-- Images appear here -->
    <div id="showHere"></div>

    <!-- Dialog Modal -->
    <dialog id="mydialog">

      <div class="dialog-top">
        <h2 id="mytitle">Temple Title</h2>
        <button class="close-btn">X</button>
      </div>

      <p></p>

    </dialog>

  </main>

  <footer>
    <p>&copy; Web Labs</p>
  </footer>

  <script src="js/scripts.js" type="module"></script>

</body>
</html>