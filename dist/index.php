<?php
  $path = $_SERVER['DOCUMENT_ROOT'].'/includes/'
 ?>

<?php include $path.'header.php' ?>
<?php include $path.'preloader.php' ?>
  <div class="site-container">
    <section class="intro">
      <?php include 'includes/blocks.php' ?>
      <div class="intro-text">
        <h1>Welcome</h1>
        <h2>I<span class="typing"></span></h2>
      </div>
    </section>
  </div>

<?php include $path.'footer.php' ?>
